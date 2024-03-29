import { FunctionalComponent, h } from "preact";

import "../style/index.css";

function ListIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.25 5.50004H2.75V4.58337H19.25V5.50004ZM19.25 10.0834H2.75V11H19.25V10.0834ZM19.25 15.5834H2.75V16.5H19.25V15.5834Z"
        fill="white"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="90"
      height="20"
      viewBox="0 0 90 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 1.78814e-07 14.285 0 14.285 0C14.285 0 5.35042 1.78814e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C1.78814e-07 5.35042 0 10 0 10C0 10 1.78814e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
        fill="#FF0000"
      />
      <path
        d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
        fill="white"
      />
      <path
        d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"
        fill="white"
      />
      <path
        d="M41.4698 18.1937C40.9054 17.8127 40.5032 17.22 40.2633 16.4157C40.0258 15.6114 39.9059 14.5437 39.9059 13.2078V11.3898C39.9059 10.0422 40.0423 8.95805 40.3151 8.14196C40.5879 7.32588 41.0136 6.72851 41.5921 6.35457C42.1707 5.98063 42.9303 5.79248 43.8711 5.79248C44.7977 5.79248 45.5385 5.98298 46.0982 6.36398C46.6556 6.74497 47.0648 7.34234 47.3235 8.15137C47.5822 8.96275 47.7116 10.0422 47.7116 11.3898V13.2078C47.7116 14.5437 47.5846 15.6161 47.333 16.4251C47.0813 17.2365 46.6721 17.8292 46.1076 18.2031C45.5432 18.5771 44.7765 18.7652 43.8099 18.7652C42.8127 18.7675 42.0343 18.5747 41.4698 18.1937ZM44.6354 16.2323C44.7906 15.8231 44.8706 15.1575 44.8706 14.2309V10.3292C44.8706 9.43077 44.793 8.77225 44.6354 8.35833C44.4778 7.94206 44.2027 7.7351 43.8075 7.7351C43.4266 7.7351 43.1561 7.94206 43.0009 8.35833C42.8433 8.77461 42.7657 9.43077 42.7657 10.3292V14.2309C42.7657 15.1575 42.8409 15.8254 42.9915 16.2323C43.142 16.6415 43.4124 16.8461 43.8075 16.8461C44.2027 16.8461 44.4778 16.6415 44.6354 16.2323Z"
        fill="white"
      />
      <path
        d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"
        fill="white"
      />
      <path
        d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"
        fill="white"
      />
      <path
        d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"
        fill="white"
      />
      <path
        d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"
        fill="white"
      />
      <path
        d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"
        fill="white"
      />
    </svg>
  );
}

function YoutubeBar() {
  return (
    <div class="youtube-bar">
      <ListIcon />
      <YoutubeIcon />
    </div>
  );
}

function HomeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 10V21H10V15H14V21H20V10L12 3L4 10Z" fill="white" />
    </svg>
  );
}

function ExploresIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.8 9.8L5.97 18.03L14.2 14.2L18.03 5.97L9.8 9.8ZM13.08 12.77C12.87 13.06 12.57 13.25 12.22 13.31C12.15 13.32 12.07 13.33 12 13.33C11.72 13.33 11.46 13.25 11.23 13.08C10.94 12.87 10.75 12.57 10.69 12.22C10.63 11.87 10.71 11.51 10.92 11.23C11.13 10.94 11.43 10.75 11.78 10.69C12.13 10.63 12.48 10.71 12.77 10.92C13.06 11.13 13.25 11.43 13.31 11.78C13.37 12.13 13.29 12.48 13.08 12.77ZM12 3C16.96 3 21 7.04 21 12C21 16.96 16.96 21 12 21C7.04 21 3 16.96 3 12C3 7.04 7.04 3 12 3ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
        fill="white"
      />
    </svg>
  );
}

function ShortsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99995 14.65V9.34999L15 12L9.99995 14.65ZM17.77 10.32C17 9.99999 16.57 9.81999 16.57 9.81999L18 9.05999C19.84 8.09999 20.53 5.82999 19.56 3.99999C18.59 2.16999 16.32 1.46999 14.49 2.43999L5.99995 6.93999C4.70995 7.61999 3.92995 8.97999 3.99995 10.43C4.06995 11.85 4.92995 13.1 6.21995 13.68C6.24995 13.69 7.41995 14.18 7.41995 14.18L5.99995 14.93C4.16995 15.9 3.46995 18.17 4.43995 20C5.40995 21.83 7.67995 22.53 9.50995 21.56L18.01 17.06C19.3 16.38 20.07 15.02 20 13.57C19.93 12.15 19.06 10.89 17.77 10.32ZM17.54 16.18L9.03995 20.68C7.69995 21.39 6.02995 20.88 5.31995 19.54C4.60995 18.2 5.11995 16.53 6.45995 15.82L8.49995 14.74V13.53L7.80995 13.25L6.69995 12.79C5.70995 12.38 5.04995 11.44 4.99995 10.38C4.94995 9.31999 5.51995 8.31999 6.45995 7.81999L14.96 3.31999C16.3 2.60999 17.97 3.11999 18.68 4.45999C19.39 5.79999 18.88 7.46999 17.54 8.17999L15.5 9.25999V10.47L17.3 11.21C18.29 11.62 18.95 12.56 19 13.62C19.05 14.68 18.48 15.68 17.54 16.18Z"
        fill="white"
      />
    </svg>
  );
}

function SubscriptionsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18V12L15 15L10 18ZM17 3H7V4H17V3ZM20 6H4V7H20V6ZM22 9H2V21H22V9ZM3 10H21V20H3V10Z"
        fill="white"
      />
    </svg>
  );
}

function LibraryIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 7L17 10.5L11 14V7ZM18 20H4V6H3V21H18V20ZM21 18H6V3H21V18ZM7 17H20V4H7V17Z"
        fill="white"
      />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.97 16.95L9.99996 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM22 12C22 17.51 17.51 22 12 22C6.48996 22 1.99996 17.51 1.99996 12H2.99996C2.99996 16.96 7.03996 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C8.80996 3 5.91996 4.64 4.27996 7.38C4.16996 7.56 4.05996 7.75 3.96996 7.94C3.95996 7.96 3.94996 7.98 3.93996 8H7.99996V9H1.95996V3H2.95996V7.74C2.99996 7.65 3.02996 7.57 3.06996 7.49C3.17996 7.27 3.29996 7.07 3.41996 6.86C5.21996 3.86 8.50996 2 12 2C17.51 2 22 6.49 22 12Z"
        fill="white"
      />
    </svg>
  );
}

function YourVideosIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 8L16 12L10 16V8ZM21 3V21H3V3H21ZM20 4H4V20H20V4Z"
        fill="white"
      />
    </svg>
  );
}

function WatchLater() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.97 16.95L10 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z"
        fill="white"
      />
    </svg>
  );
}

function LikedVideos() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.77 11H14.54L16.06 6.06C16.38 5.03 15.54 4 14.38 4C13.8 4 13.24 4.24 12.86 4.65L7 11H3V21H7H8H17.43C18.49 21 19.41 20.33 19.62 19.39L20.96 13.39C21.23 12.15 20.18 11 18.77 11ZM7 20H4V12H7V20ZM19.98 13.17L18.64 19.17C18.54 19.65 18.03 20 17.43 20H8V11.39L13.6 5.33C13.79 5.12 14.08 5 14.38 5C14.64 5 14.88 5.11 15.01 5.3C15.08 5.4 15.16 5.56 15.1 5.77L13.58 10.71L13.18 12H14.53H18.76C19.17 12 19.56 12.17 19.79 12.46C19.92 12.61 20.05 12.86 19.98 13.17Z"
        fill="white"
      />
    </svg>
  );
}

function ShowMore() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15.7L5.59998 9.40001L6.29998 8.70001L11.9 14.3L17.5 8.70001L18.2 9.40001L12 15.7Z"
        fill="white"
      />
    </svg>
  );
}

function Room({
  title,
  Icon,
  active = false,
}: {
  title: string;
  Icon: any;
  active?: boolean;
}) {
  return (
    <div class={`room ${active ? "room-active" : ""}`}>
      <Icon />
      <div class={`title`}>{title}</div>
    </div>
  );
}

function Divider() {
  return <div class="divider" />;
}

function FirstCategory() {
  return (
    <div className="category">
      <div class="rooms">
        <Room Icon={HomeIcon} active={true} title="Home" />
        <Room Icon={ExploresIcon} title="Explores" />
        <Room Icon={ShortsIcon} title="Shorts" />
        <Room Icon={SubscriptionsIcon} title="Subscriptions" />
      </div>
    </div>
  );
}

function SecondCategory() {
  return (
    <div className="category">
      <div class="rooms">
        <Room Icon={LibraryIcon} title="Library" />
        <Room Icon={HistoryIcon} title="History" />
        <Room Icon={YourVideosIcon} title="Your videos" />
        <Room Icon={WatchLater} title="Watch later" />
        <Room Icon={LikedVideos} title="Liked videos" />
        <Room Icon={ShowMore} title="Show more" />
      </div>
    </div>
  );
}

function UserIcon(url: string) {
  return () => (
    <svg class="user-icon">
      <image href={url} alt="" />
    </svg>
  );
}

function SubscriptionsCategory({ title }: { title: string }) {
  return (
    <div className="category">
      <div class="title">{title}</div>
      <div class="rooms users-room">
        <Room
          Icon={UserIcon(
            "https://cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png"
          )}
          title="Nadir On The Go"
        />
        <Room
          Icon={UserIcon(
            "https://cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png"
          )}
          title="Coke Studio Bangla"
        />
        <Room
          Icon={UserIcon(
            "https://cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png"
          )}
          title="MKBHD"
        />
        <Room
          Icon={UserIcon(
            "https://cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png"
          )}
          title="Figma"
        />
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <span class="search">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.87 20.17L15.28 14.58C16.35 13.35 17 11.75 17 10C17 6.13 13.87 3 10 3C6.13 3 3 6.13 3 10C3 13.87 6.13 17 10 17C11.75 17 13.35 16.35 14.58 15.29L20.17 20.88L20.87 20.17ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z"
          fill="white"
        />
      </svg>
    </span>
  );
}
function VoiceIcon() {
  return (
    <span class="voice">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"
          fill="white"
        />
      </svg>
    </span>
  );
}

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <SearchIcon />
      <VoiceIcon />
    </div>
  );
}

function SuggestionsArrow() {
  return (
    <div class="arrow">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7 12L9.39995 18.4L8.69995 17.7L14.3 12.1L8.69995 6.50002L9.39995 5.80002L15.7 12Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
function SuggestionsItems() {
  return <div class="items">
    <div class="item">Test</div>
    <div class="item">Cook Studio</div>
    <div class="item">UX</div>
    <div class="item">Music</div>
    <div class="item">Saintmartin</div><div class="item">Test</div>
    <div class="item">Cook Studio</div>
    <div class="item">UX</div>
    <div class="item">Music</div>
    <div class="item">Saintmartin</div><div class="item">Test</div>
    <div class="item">Cook Studio</div>
    <div class="item">UX</div>
    <div class="item">Music</div>
    <div class="item">Saintmartin</div><div class="item">Test</div>
    <div class="item">Cook Studio</div>
    <div class="item">UX</div>
    <div class="item">Music</div>
    <div class="item">Saintmartin</div>
  </div>;
}

function SuggestionsBar() {
  return (
    <div class="suggestions-bar">
      <SuggestionsItems />
      <SuggestionsArrow />
    </div>
  );
}

const App: FunctionalComponent = () => {
  return (
    <div className="application">
      <div className="sidebar-container">
        <div className="sidebar">
          <YoutubeBar />
          <div class="categories">
            <FirstCategory />
            <Divider />
            <SecondCategory />
            <Divider />
            <SubscriptionsCategory title={"Subscriptions"} />
          </div>
        </div>
      </div>
      <div className="appbar-container">
        <div className="appbar">
          <SearchBar />
          <Divider />
          <SuggestionsBar />
          <div class="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
