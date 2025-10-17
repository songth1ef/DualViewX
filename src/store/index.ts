import { defineStore } from 'pinia'
import type { 
  AppState, 
  RecordingConfig, 
  FilterConfig, 
  PerformanceData, 
  RecordingFile,
  RecordingStatus,
  RecordingMode,
  VideoResolution,
  VideoCodec
} from '@/types'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    recordingStatus: 'idle',
    recordingConfig: {
      recordingMode: 'dual',
      resolution: '1080p',
      frameRate: 60,
      codec: 'h264',
      audioSampleRate: 48000,
      audioBitRate: 128000
    },
    filterConfig: {
      exposure: 0,
      saturation: 100,
      contrast: 100,
      whiteBalance: 5500,
      logMode: false,
      flatMode: false
    },
    performanceData: {
      cpuUsage: 0,
      memoryUsage: 0,
      frameRate: 0,
      droppedFrames: 0,
      recordingTime: 0
    },
    recordingFiles: [],
    isRecording: false,
    errorMessage: undefined
  }),

  getters: {
    /** 是否正在录制 */
    isRecordingActive: (state): boolean => {
      return state.recordingStatus === 'recording'
    },

    /** 是否可以开始录制 */
    canStartRecording: (state): boolean => {
      return state.recordingStatus === 'idle' || state.recordingStatus === 'error'
    },

    /** 是否可以暂停录制 */
    canPauseRecording: (state): boolean => {
      return state.recordingStatus === 'recording'
    },

    /** 是否可以继续录制 */
    canResumeRecording: (state): boolean => {
      return state.recordingStatus === 'paused'
    },

    /** 是否可以停止录制 */
    canStopRecording: (state): boolean => {
      return ['recording', 'paused'].includes(state.recordingStatus)
    },

    /** 录制模式显示文本 */
    recordingModeText: (state): string => {
      const modeMap: Record<RecordingMode, string> = {
        single: '单路录制',
        dual: '双路录制',
        quad: '四路录制'
      }
      return modeMap[state.recordingConfig.recordingMode]
    },

    /** 分辨率显示文本 */
    resolutionText: (state): string => {
      const resolutionMap: Record<VideoResolution, string> = {
        '720p': '720P',
        '1080p': '1080P',
        '4k': '4K'
      }
      return resolutionMap[state.recordingConfig.resolution]
    },

    /** 编码格式显示文本 */
    codecText: (state): string => {
      const codecMap: Record<VideoCodec, string> = {
        h264: 'H.264',
        hevc: 'HEVC'
      }
      return codecMap[state.recordingConfig.codec]
    }
  },

  actions: {
    /** 设置录制状态 */
    setRecordingStatus(status: RecordingStatus) {
      this.recordingStatus = status
      this.isRecording = status === 'recording'
    },

    /** 设置录制配置 */
    setRecordingConfig(config: Partial<RecordingConfig>) {
      this.recordingConfig = { ...this.recordingConfig, ...config }
    },

    /** 设置滤镜配置 */
    setFilterConfig(config: Partial<FilterConfig>) {
      this.filterConfig = { ...this.filterConfig, ...config }
    },

    /** 更新性能数据 */
    updatePerformanceData(data: Partial<PerformanceData>) {
      this.performanceData = { ...this.performanceData, ...data }
    },

    /** 添加录制文件 */
    addRecordingFile(file: RecordingFile) {
      this.recordingFiles.unshift(file)
    },

    /** 删除录制文件 */
    removeRecordingFile(filePath: string) {
      const index = this.recordingFiles.findIndex(file => file.path === filePath)
      if (index > -1) {
        this.recordingFiles.splice(index, 1)
      }
    },

    /** 清空录制文件列表 */
    clearRecordingFiles() {
      this.recordingFiles = []
    },

    /** 设置错误信息 */
    setError(message: string) {
      this.errorMessage = message
      this.recordingStatus = 'error'
    },

    /** 清除错误信息 */
    clearError() {
      this.errorMessage = undefined
      if (this.recordingStatus === 'error') {
        this.recordingStatus = 'idle'
      }
    },

    /** 重置应用状态 */
    reset() {
      this.recordingStatus = 'idle'
      this.isRecording = false
      this.errorMessage = undefined
      this.performanceData = {
        cpuUsage: 0,
        memoryUsage: 0,
        frameRate: 0,
        droppedFrames: 0,
        recordingTime: 0
      }
    }
  }
})
