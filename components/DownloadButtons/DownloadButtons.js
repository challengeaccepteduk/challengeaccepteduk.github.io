import { container } from './DownloadButtons.module.css';

const DownloadButtons = () => (
  <div className={container}>
    <p>Download today</p>
    <a href="https://apps.apple.com/us/app/id1517580212">
      <img src="/app-store-badge.png" alt="Download Challenge Accepted from the App Store" width="150" />
    </a>
    <a href="https://play.google.com/store/apps/details?id=com.challengeaccepted.challengeacceptedapp&hl=en_GB">
      <img src="/google-play-badge.png" alt="Download Challenge Accepted from Google Play" width="150" />
    </a>
  </div>
);

export default DownloadButtons;