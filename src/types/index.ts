/**
 * 录制配置类型
 */
export interface RecordingConfig {
  /** 录制组合类型 */
  recordingMode: RecordingMode
  /** 分辨率 */
  resolution: VideoResolution
  /** 帧率 */
  frameRate: number
  /** 编码格式 */
  codec: VideoCodec
  /** 音频采样率 */
  audioSampleRate: number
  /** 音频比特率 */
  audioBitRate: number
}

/**
 * 录制模式
 */
export type RecordingMode = 
  | 'single'      // 单路录制
  | 'dual'        // 双路录制
  | 'quad'        // 四路录制

/**
 * 视频分辨率
 */
export type VideoResolution = 
  | '720p'        // 1280x720
  | '1080p'       // 1920x1080
  | '4k'          // 3840x2160

/**
 * 视频编码格式
 */
export type VideoCodec = 
  | 'h264'        // H.264
  | 'hevc'        // HEVC

/**
 * 摄像头类型
 */
export type CameraType = 
  | 'front'       // 前置摄像头
  | 'back'        // 后置摄像头

/**
 * 录制方向
 */
export type RecordingOrientation = 
  | 'portrait'    // 竖屏
  | 'landscape'   // 横屏

/**
 * 录制状态
 */
export type RecordingStatus = 
  | 'idle'        // 空闲
  | 'preparing'   // 准备中
  | 'recording'   // 录制中
  | 'paused'      // 暂停
  | 'stopping'    // 停止中
  | 'error'       // 错误

/**
 * 录制文件信息
 */
export interface RecordingFile {
  /** 文件路径 */
  path: string
  /** 文件大小（字节） */
  size: number
  /** 录制时长（毫秒） */
  duration: number
  /** 摄像头类型 */
  cameraType: CameraType
  /** 录制方向 */
  orientation: RecordingOrientation
  /** 分辨率 */
  resolution: VideoResolution
  /** 帧率 */
  frameRate: number
  /** 创建时间 */
  createTime: number
}

/**
 * 性能监控数据
 */
export interface PerformanceData {
  /** CPU 使用率 */
  cpuUsage: number
  /** 内存使用量（MB） */
  memoryUsage: number
  /** 帧率 */
  frameRate: number
  /** 丢帧数 */
  droppedFrames: number
  /** 录制时长 */
  recordingTime: number
}

/**
 * 滤镜配置
 */
export interface FilterConfig {
  /** 曝光值 */
  exposure: number
  /** 饱和度 */
  saturation: number
  /** 对比度 */
  contrast: number
  /** 白平衡色温 */
  whiteBalance: number
  /** 是否启用 Log 模式 */
  logMode: boolean
  /** 是否启用 Flat 模式 */
  flatMode: boolean
}

/**
 * 应用状态
 */
export interface AppState {
  /** 录制状态 */
  recordingStatus: RecordingStatus
  /** 录制配置 */
  recordingConfig: RecordingConfig
  /** 滤镜配置 */
  filterConfig: FilterConfig
  /** 性能数据 */
  performanceData: PerformanceData
  /** 录制文件列表 */
  recordingFiles: RecordingFile[]
  /** 是否正在录制 */
  isRecording: boolean
  /** 错误信息 */
  errorMessage?: string
}
