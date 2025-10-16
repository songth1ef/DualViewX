const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'

describe('choose-video', () => {
  if (isAppWebView) {
  	it('skip', () => {
  		expect(1).toBe(1)
  	})
  	return
  }

  it('screenshot', async () => {
    const page = await program.reLaunch('/pages/API/choose-video/choose-video')
    await page.waitFor('view')

    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot()
  })
})
