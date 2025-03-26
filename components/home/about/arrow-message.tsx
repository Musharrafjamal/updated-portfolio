import React from "react";

const ArrowMessage = () => {
  return (
    <div className="flex items-center justify-center h-72 gap-2 relative">
      <div className="relative flex items-center">
        <svg
          width="160"
          height="170"
          viewBox="0 0 160 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 h-28 text-zinc-600  dark:text-zinc-300 absolute -top-20 -right-16"
          style={{
            transform: "rotate(15deg) scaleX(-1)",
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M153 0.171568C148.959 0.722078 143.843 2.45417 134.189 6.52257C118.801 13.0481 116.787 14.082 116.787 15.5187C116.787 15.8141 117.016 16.1766 117.311 16.2706C118.251 16.6331 122.266 16.472 124.736 15.9484C126.106 15.6933 127.381 15.4918 127.61 15.559C127.811 15.6261 126.764 16.7674 125.3 18.0967C122.373 20.7687 110.597 33.1216 106.328 38.009C104.824 39.7411 102.649 42.4131 101.467 43.9438C99.7752 46.2264 99.2247 46.7501 98.701 46.5889C92.1754 44.8568 91.7323 44.7628 86.9657 44.6017C74.935 44.1452 63.0788 47.1797 48.9937 54.2826C36.9362 60.3785 26.7987 67.9782 20.2731 75.7257C14.8888 82.1438 11.8005 87.6489 8.57803 96.4839C2.41497 113.335 -0.391308 131.099 0.427748 147.883C1.01854 159.618 3.00576 165.942 6.91306 168.386C8.1215 169.165 8.73915 169.326 10.337 169.326C13.922 169.299 21.2264 165.942 24.5832 162.773C26.6375 160.88 26.6644 160.128 24.7175 159.417C21.9783 158.369 20.2462 155.241 19.0109 149.051C17.6682 142.525 17.5071 128.937 18.6887 119.458C20.0582 108.501 23.1196 96.2556 26.8658 86.7627C31.6861 74.6112 38.8965 66.1253 50.0679 59.3849C59.5206 53.6516 70.5309 52.1477 80.8966 55.1151C83.9312 56.0013 91.6921 59.5863 91.6921 60.0966C91.6921 60.2577 91.2355 61.7615 90.685 63.4265C87.5565 72.812 87.3282 83.5671 89.9734 98.1086C91.8666 108.447 94.2164 114.436 97.8283 118.115C101.091 121.445 102.165 121.901 106.529 121.901C109.725 121.874 110.477 121.767 113.176 120.827C121.353 117.994 127.972 113.59 130.913 108.998C136.163 100.781 135.612 85.2992 129.677 73.3356C126.482 66.9846 119.741 59.1835 113.122 54.2692C110.772 52.5103 109.993 51.7584 110.128 51.369C111.269 48.3344 115.284 42.3728 119.647 37.096C122.615 33.5378 134.968 21.1312 135.223 21.4132C135.357 21.5072 135.062 23.3333 134.605 25.4547C133.491 30.8658 133.263 32.9873 133.759 33.5647C134.35 34.2495 138.096 34.1823 141.748 33.4304C147.75 32.1951 152.342 29.7782 152.342 27.9253C152.342 26.4886 154.464 16.5123 155.565 12.9273C156.116 11.0743 157.23 7.8787 158.036 5.85122C159.66 1.78282 159.795 0.963765 158.922 0.507245C157.982 0.0238703 155.31 -0.150682 153.027 0.144714L153 0.171568ZM151.792 2.64215C152.504 2.93754 152.45 3.68946 151.497 5.86464C149.187 11.1146 146.381 21.2521 145.428 27.7642L145.065 30.4362L143.789 30.9195C143.078 31.2149 142.057 31.4432 141.547 31.4432C140.379 31.4432 140.339 31.0135 141.064 26.9451C142.205 20.4196 144.42 12.605 146.475 7.83842C147.16 6.21375 147.683 4.87104 147.616 4.80391C147.549 4.73677 144.058 6.14661 139.896 7.93241L132.269 11.1952L136.176 11.222C138.325 11.222 140.285 11.3563 140.473 11.4772C141.064 11.8397 140.607 12.3633 137.801 14.6325C130.765 20.339 118.211 32.853 112.571 39.8217C109.147 44.0646 106.18 48.5224 104.327 52.1075C103.051 54.6854 102.957 54.9406 103.508 55.236C105.24 56.243 109.859 59.9891 112.665 62.7014C118.56 68.4079 123.058 75.2826 125.247 81.929C128.697 92.5229 128.576 102.727 124.857 110.059C123.031 113.711 119.835 116.316 115.472 117.779C108.369 120.156 102.3 115.362 98.8756 104.648C96.4318 96.927 94.8072 86.2928 94.8072 77.686C94.8072 70.2206 95.2905 66.8369 97.2509 60.9022C98.7547 56.3773 99.0099 56.9546 94.6058 54.7123C85.1799 49.9591 75.4452 48.9118 64.7169 51.4495C53.6932 54.0947 41.5417 61.0365 33.2571 69.4418C25.9528 76.8401 22.2066 83.2582 18.165 95.3829C13.7341 108.716 11.6394 120.317 11.25 134.241C10.7935 150.837 13.4655 161.431 18.5544 163.122C19.4674 163.418 19.6017 163.552 19.266 163.968C18.447 164.908 16.2986 165.768 15.1305 165.593C11.5723 165.002 9.0614 160.638 7.66498 152.716C6.84592 148.192 6.84592 130.522 7.66498 124.452C9.39708 111.509 13.1701 97.4641 17.6682 87.3938C21.6426 78.4648 28.034 70.6771 36.7348 64.1247C51.9611 52.7117 69.2284 46.7232 83.1792 48.0256C88.2279 48.509 94.2566 50.2679 98.8219 52.5908C100.353 53.3696 100.285 53.4367 101.494 51.1273C103.803 46.7635 108.865 40.1708 115.082 33.4573C120.037 28.1133 131.114 17.2239 133.92 14.9413C135.035 14.0283 135.948 13.2092 135.948 13.0481C135.975 12.7259 130.631 12.793 128.644 13.1421C122.937 14.2163 122.521 13.8269 127.113 11.8397C137.774 7.1805 145.924 3.82373 148.032 3.1658C150.731 2.34675 151 2.27962 151.752 2.57501L151.792 2.64215Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M101.333 59.4254C101.011 59.9759 99.8289 65.0379 99.4798 67.6427C97.9491 78.4918 100.823 98.5384 105.253 107.642C107.697 112.691 111.833 116.208 115.391 116.208C120.05 116.208 123.796 106.689 123.219 96.3632C122.4 82.1843 115.982 70.5161 103.401 60.3787C101.83 59.1031 101.601 59.0091 101.346 59.4388L101.333 59.4254ZM109.027 76.5717C113.498 83.0973 116.452 92.7111 116.452 100.633C116.452 103.99 115.928 108.716 115.512 109.146C115.19 109.468 113.363 107.253 112.155 105.131C109.282 100.042 106.287 86.548 105.831 76.4509L105.603 72.0468L106.677 73.3492C107.268 74.0609 108.301 75.4976 109.027 76.5717Z"
            fill="currentColor"
          />
        </svg>
        <div className="font-caveat text-5xl font-semibold text-indigo-500 dark:text-indigo-400">
          Connect with me
        </div>
      </div>
    </div>
  );
};

export default ArrowMessage;
