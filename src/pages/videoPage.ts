import { TIMEOUT_MS } from "../constants/globalConstants"
import { addText } from "../support/reporter"
import BasePage from "./basePage"
require('expect-webdriverio')
class VideoPage extends BasePage {

    get acceptBtn() { return $('button.accept-cookies-button') }
    get introVid() { return $("(//button[normalize-space()='watch the story'])[1]") } //Before Playing Video
    get videoIframe() { return $('#Video-1 iframe') } //While video is playing
    get player() { return $('#movie_player') } //After Video is over
    get playPauseButton() { return $("button.ytp-play-button") }
    get videoTime() { return $('.ytp-time-current') }

    async clickIntroVideoToBePlayed() {
        await (await this.introVid)
            .waitForDisplayed(TIMEOUT_MS);
        await (await this.introVid).click();
    }

    /*************
     * Method: 
     * Verify Video is auto played and verify is played status
     * Then pause video and verify video is paused
     */
    async verifyVideoPlaying() {
        //Verify Playing
        await browser.switchToFrame(await this.videoIframe)
        await expect(await this.player).toHaveElementClass('playing-mode')
        await addText("Video is playing")
    }

    async pauseVideo() {
        //Pause
        await (await this.playPauseButton)
            .waitForDisplayed(TIMEOUT_MS);
        await expect(await this.playPauseButton).toBeClickable();
        await (await this.playPauseButton).moveTo()
        await browser.pause(2000);
        await (await this.playPauseButton).click()
        await addText("Clicked on Pause Button")
    }

    async verifyVideoPaused() {
        //VerifyPause
        await expect(await this.player).toHaveElementClass('paused-mode')
        await expect(await this.videoTime).toHaveTextContaining('0:0')
        await addText("Verified Video Paused")
        await browser.switchToParentFrame();
    }
}

const videoPage = new VideoPage();
export { videoPage };