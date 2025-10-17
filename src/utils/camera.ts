import type { CameraType, RecordingOrientation, VideoResolution } from '@/types'

/**
 * 摄像头工具类
 */
export class CameraUtils {
  /**
   * 获取摄像头权限
   */
  static async requestCameraPermission(): Promise<boolean> {
    try {
      const result = await uni.getSetting()
      if (result.authSetting['scope.camera'] === false) {
        // 用户拒绝了权限，引导用户手动开启
        await uni.showModal({
          title: '权限申请',
          content: '需要摄像头权限才能进行录制，请在设置中开启',
          showCancel: false
        })
        return false
      }
      
      if (result.authSetting['scope.camera'] === undefined) {
        // 首次申请权限
        const authResult = await uni.authorize({
          scope: 'scope.camera'
        })
        return true
      }
      
      return true
    } catch (error) {
      console.error('获取摄像头权限失败:', error)
      return false
    }
  }

  /**
   * 获取麦克风权限
   */
  static async requestMicrophonePermission(): Promise<boolean> {
    try {
      const result = await uni.getSetting()
      if (result.authSetting['scope.record'] === false) {
        await uni.showModal({
          title: '权限申请',
          content: '需要麦克风权限才能进行录制，请在设置中开启',
          showCancel: false
        })
        return false
      }
      
      if (result.authSetting['scope.record'] === undefined) {
        const authResult = await uni.authorize({
          scope: 'scope.record'
        })
        return true
      }
      
      return true
    } catch (error) {
      console.error('获取麦克风权限失败:', error)
      return false
    }
  }

  /**
   * 获取设备信息
   */
  static async getDeviceInfo() {
    try {
      const systemInfo = await uni.getSystemInfo()
      return {
        platform: systemInfo.platform,
        system: systemInfo.system,
        model: systemInfo.model,
        brand: systemInfo.brand,
        pixelRatio: systemInfo.pixelRatio,
        screenWidth: systemInfo.screenWidth,
        screenHeight: systemInfo.screenHeight,
        windowWidth: systemInfo.windowWidth,
        windowHeight: systemInfo.windowHeight
      }
    } catch (error) {
      console.error('获取设备信息失败:', error)
      return null
    }
  }

  /**
   * 检查设备是否支持双摄像头
   */
  static async checkDualCameraSupport(): Promise<boolean> {
    try {
      // 这里需要调用原生插件来检查设备是否支持双摄像头
      // 暂时返回 true，实际实现需要原生插件支持
      return true
    } catch (error) {
      console.error('检查双摄像头支持失败:', error)
      return false
    }
  }

  /**
   * 获取支持的分辨率列表
   */
  static getSupportedResolutions(): VideoResolution[] {
    return ['720p', '1080p', '4k']
  }

  /**
   * 获取分辨率对应的宽高
   */
  static getResolutionSize(resolution: VideoResolution): { width: number; height: number } {
    const sizeMap: Record<VideoResolution, { width: number; height: number }> = {
      '720p': { width: 1280, height: 720 },
      '1080p': { width: 1920, height: 1080 },
      '4k': { width: 3840, height: 2160 }
    }
    return sizeMap[resolution]
  }

  /**
   * 获取支持帧率列表
   */
  static getSupportedFrameRates(): number[] {
    return [24, 30, 60, 120]
  }

  /**
   * 检查设备性能等级
   */
  static async checkDevicePerformance(): Promise<'low' | 'medium' | 'high'> {
    try {
      const deviceInfo = await this.getDeviceInfo()
      if (!deviceInfo) return 'low'

      // 简单的性能评估逻辑
      const { model, system } = deviceInfo
      
      // 高端设备判断
      if (model.includes('iPhone 14') || model.includes('iPhone 15') || 
          model.includes('Galaxy S23') || model.includes('Galaxy S24')) {
        return 'high'
      }
      
      // 中端设备判断
      if (model.includes('iPhone 12') || model.includes('iPhone 13') ||
          model.includes('Galaxy S21') || model.includes('Galaxy S22')) {
        return 'medium'
      }
      
      return 'low'
    } catch (error) {
      console.error('检查设备性能失败:', error)
      return 'low'
    }
  }

  /**
   * 根据性能等级推荐录制配置
   */
  static getRecommendedConfig(performance: 'low' | 'medium' | 'high') {
    const configs = {
      low: {
        maxResolution: '720p' as VideoResolution,
        maxFrameRate: 30,
        maxRecordingMode: 'single' as const
      },
      medium: {
        maxResolution: '1080p' as VideoResolution,
        maxFrameRate: 60,
        maxRecordingMode: 'dual' as const
      },
      high: {
        maxResolution: '4k' as VideoResolution,
        maxFrameRate: 120,
        maxRecordingMode: 'quad' as const
      }
    }
    
    return configs[performance]
  }
}
