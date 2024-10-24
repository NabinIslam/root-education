import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";

const Step2 = () => {
  return (
    <div className="flex flex-row-reverse items-center justify-center gap-x-10">
      {/* column  */}
      <FadeInRightWithSlowBounce className="basis-[45%]">
        {/* card  */}
        <div className="relative space-y-3 rounded-lg border border-b-8 border-b-primary px-8 py-5 shadow-lg">
          <div className="-mt-16 flex items-center justify-center">
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_728_11787)">
                <circle cx="45" cy="45" r="40" fill="#FDFDFD" />
                <circle
                  cx="45"
                  cy="45"
                  r="39.5"
                  stroke="#F37329"
                  strokeDasharray="2 2"
                />
              </g>
              <g filter="url(#filter1_d_728_11787)">
                <circle cx="45" cy="45" r="30" fill="#F37329" />
              </g>
              <g clipPath="url(#clip0_728_11787)">
                <path
                  d="M55.6855 48.6445C51.7282 48.6445 48.5078 51.8649 48.5078 55.8223C48.5078 59.7797 51.7282 63 55.6855 63C59.6429 63 63 59.7797 63 55.8223C63 51.8649 59.6429 48.6445 55.6855 48.6445ZM57.7363 56.8477H55.6855C55.1188 56.8477 54.6602 56.389 54.6602 55.8223V53.7715C54.6602 53.2047 55.1188 52.7461 55.6855 52.7461C56.2523 52.7461 56.7109 53.2047 56.7109 53.7715V54.7969H57.7363C58.3031 54.7969 58.7617 55.2555 58.7617 55.8223C58.7617 56.389 58.3031 56.8477 57.7363 56.8477ZM32.1016 53.7715H30.0508C28.9181 53.7715 28 54.6896 28 55.8223C28 56.9548 28.9181 57.873 30.0508 57.873H32.1016C33.2342 57.873 34.1523 56.9548 34.1523 55.8223C34.1523 54.6896 33.2342 53.7715 32.1016 53.7715ZM32.1016 43.5176H30.0508C28.9181 43.5176 28 44.4357 28 45.5684C28 46.7009 28.9181 47.6191 30.0508 47.6191H32.1016C33.2342 47.6191 34.1523 46.7009 34.1523 45.5684C34.1523 44.4357 33.2342 43.5176 32.1016 43.5176ZM32.1016 33.127H30.0508C28.9181 33.127 28 34.0451 28 35.1777C28 36.3102 28.9181 37.2285 30.0508 37.2285H32.1016C33.2342 37.2285 34.1523 36.3102 34.1523 35.1777C34.1523 34.0451 33.2342 33.127 32.1016 33.127Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M57.7363 28H35.1777C33.4815 28 32.1016 29.3799 32.1016 31.0762C34.3636 31.0762 36.2031 32.9157 36.2031 35.1777C36.2031 37.4398 34.3636 39.2793 32.1016 39.2793V41.4668C34.3636 41.4668 36.2031 43.3063 36.2031 45.5684C36.2031 47.8304 34.3636 49.6699 32.1016 49.6699V51.7207C34.3636 51.7207 36.2031 53.5602 36.2031 55.8223C36.2031 58.0843 34.3636 59.9238 32.1016 59.9238C32.1016 61.6201 33.4815 63 35.1777 63H49.9566C47.841 61.3074 46.457 58.7362 46.457 55.8223C46.457 50.7334 50.5967 46.5938 55.6855 46.5938C57.582 46.5938 59.4815 47.1712 60.9492 48.156V31.0762C60.9492 29.3799 59.4326 28 57.7363 28ZM46.1567 50.3949L42.055 54.4964C41.8547 54.6967 41.5924 54.7969 41.3301 54.7969C41.0678 54.7969 40.8054 54.6967 40.6051 54.4964L38.2659 52.1572C37.8654 51.7567 37.8654 51.1078 38.2659 50.7073C38.6665 50.3068 39.3154 50.3068 39.7159 50.7073L41.3301 52.3215L44.7067 48.9449C45.1072 48.5444 45.7561 48.5444 46.1567 48.9449C46.5572 49.3454 46.5572 49.9944 46.1567 50.3949ZM46.1567 42.1917L42.0551 46.2933C41.8548 46.4936 41.5924 46.5938 41.3301 46.5938C41.0679 46.5938 40.8054 46.4936 40.6052 46.2933L38.266 43.9541C37.8654 43.5536 37.8654 42.9047 38.2659 42.5042C38.6665 42.1037 39.3154 42.1037 39.7159 42.5042L41.3301 44.1184L44.7067 40.7418C45.1072 40.3413 45.7561 40.3413 46.1567 40.7418C46.5572 41.1423 46.5572 41.7912 46.1567 42.1917ZM46.1567 33.8519L42.0551 37.9535C41.8548 38.1538 41.5924 38.2539 41.3301 38.2539C41.0679 38.2539 40.8054 38.1538 40.6052 37.9535L38.266 35.6143C37.8654 35.2138 37.8654 34.5649 38.2659 34.1644C38.6665 33.7639 39.3154 33.7639 39.7159 34.1644L41.3301 35.7785L44.7067 32.4019C45.1072 32.0014 45.7561 32.0014 46.1567 32.4019C46.5572 32.8025 46.5572 33.4514 46.1567 33.8519ZM55.6855 44.543H49.5332C48.9664 44.543 48.5078 44.0843 48.5078 43.5176C48.5078 42.9508 48.9664 42.4922 49.5332 42.4922H55.6855C56.2523 42.4922 56.7109 42.9508 56.7109 43.5176C56.7109 44.0843 56.2523 44.543 55.6855 44.543ZM55.6855 36.2031H49.5332C48.9664 36.2031 48.5078 35.7445 48.5078 35.1777C48.5078 34.611 48.9664 34.1523 49.5332 34.1523H55.6855C56.2523 34.1523 56.7109 34.611 56.7109 35.1777C56.7109 35.7445 56.2523 36.2031 55.6855 36.2031Z"
                  fill="#FDFDFD"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_728_11787"
                  x="0"
                  y="0"
                  width="90"
                  height="90"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_728_11787"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_728_11787"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_728_11787"
                  x="10"
                  y="10"
                  width="70"
                  height="70"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_728_11787"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_728_11787"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_728_11787">
                  <rect
                    width="35"
                    height="35"
                    fill="white"
                    transform="translate(28 28)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h5 className="text-center text-xl font-medium">
            Personal Study Plan
          </h5>
          <p className="text-center text-sm font-medium">
            We design a study plan just for you. This plan lists the courses and
            programs that fit your goals.
          </p>

          <div className="absolute right-0 top-0 h-[100px] w-[8px] translate-y-1/3 rounded-l-full bg-primary"></div>
          <div className="absolute left-0 top-0 h-[100px] w-[8px] translate-y-1/3 rounded-r-full bg-primary"></div>
        </div>
      </FadeInRightWithSlowBounce>
      {/* column  */}
      <div className="basis-[10%]">
        <svg
          width="160"
          height="341"
          viewBox="0 0 160 341"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M80 0L80 341" stroke="#F37329" strokeWidth="10" />
          <g filter="url(#filter0_d_1732_13832)">
            <circle cx="80" cy="170" r="15" fill="#F37329" />
          </g>
          <path
            d="M0.566243 170L15 184.434L29.4338 170L15 155.566L0.566243 170ZM15 172.5L66 172.5L66 167.5L15 167.5L15 172.5Z"
            fill="#F37329"
          />
          <path
            d="M159.434 170L145 155.566L130.566 170L145 184.434L159.434 170ZM145 167.5L94 167.5L94 172.5L145 172.5L145 167.5Z"
            fill="#F37329"
          />
          <defs>
            <filter
              id="filter0_d_1732_13832"
              x="60"
              y="150"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1732_13832"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1732_13832"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      {/* column  */}
      <FadeInLeftWithSlowBounce className="flex basis-[45%] items-center justify-end">
        <svg
          width="170"
          height="69"
          viewBox="0 0 170 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_728_11798)">
            <path
              d="M28.8252 7.3747C30.3279 5.85512 32.3762 5 34.5134 5H137.387C139.684 5 141.87 5.98725 143.389 7.71039L162.338 29.2104C165.002 32.2335 165.002 36.7665 162.338 39.7896L143.389 61.2896C141.87 63.0128 139.684 64 137.387 64H34.5134C32.3762 64 30.3279 63.1449 28.8252 61.6253L7.56305 40.1253C4.4807 37.0085 4.4807 31.9915 7.56305 28.8747L28.8252 7.3747Z"
              fill="#F37329"
            />
          </g>
          <path
            d="M45.748 44.192C44.468 44.192 43.244 44 42.076 43.616C40.908 43.216 39.988 42.704 39.316 42.08L40.204 40.208C40.844 40.768 41.66 41.232 42.652 41.6C43.644 41.968 44.676 42.152 45.748 42.152C46.724 42.152 47.516 42.04 48.124 41.816C48.732 41.592 49.18 41.288 49.468 40.904C49.756 40.504 49.9 40.056 49.9 39.56C49.9 38.984 49.708 38.52 49.324 38.168C48.956 37.816 48.468 37.536 47.86 37.328C47.268 37.104 46.612 36.912 45.892 36.752C45.172 36.592 44.444 36.408 43.708 36.2C42.988 35.976 42.324 35.696 41.716 35.36C41.124 35.024 40.644 34.576 40.276 34.016C39.908 33.44 39.724 32.704 39.724 31.808C39.724 30.944 39.948 30.152 40.396 29.432C40.86 28.696 41.564 28.112 42.508 27.68C43.468 27.232 44.684 27.008 46.156 27.008C47.132 27.008 48.1 27.136 49.06 27.392C50.02 27.648 50.852 28.016 51.556 28.496L50.764 30.416C50.044 29.936 49.284 29.592 48.484 29.384C47.684 29.16 46.908 29.048 46.156 29.048C45.212 29.048 44.436 29.168 43.828 29.408C43.22 29.648 42.772 29.968 42.484 30.368C42.212 30.768 42.076 31.216 42.076 31.712C42.076 32.304 42.26 32.776 42.628 33.128C43.012 33.48 43.5 33.76 44.092 33.968C44.7 34.176 45.364 34.368 46.084 34.544C46.804 34.704 47.524 34.888 48.244 35.096C48.98 35.304 49.644 35.576 50.236 35.912C50.844 36.248 51.332 36.696 51.7 37.256C52.068 37.816 52.252 38.536 52.252 39.416C52.252 40.264 52.02 41.056 51.556 41.792C51.092 42.512 50.372 43.096 49.396 43.544C48.436 43.976 47.22 44.192 45.748 44.192ZM59.7903 44.144C58.5103 44.144 57.5183 43.8 56.8143 43.112C56.1103 42.424 55.7583 41.44 55.7583 40.16V28.496H58.0623V40.064C58.0623 40.752 58.2303 41.28 58.5663 41.648C58.9183 42.016 59.4143 42.2 60.0543 42.2C60.7743 42.2 61.3743 42 61.8543 41.6L62.5743 43.256C62.2223 43.56 61.7983 43.784 61.3023 43.928C60.8223 44.072 60.3183 44.144 59.7903 44.144ZM53.5983 33.176V31.28H61.7103V33.176H53.5983ZM70.6019 44.144C69.2419 44.144 68.0419 43.864 67.0019 43.304C65.9779 42.744 65.1779 41.976 64.6019 41C64.0419 40.024 63.7619 38.904 63.7619 37.64C63.7619 36.376 64.0339 35.256 64.5779 34.28C65.1379 33.304 65.8979 32.544 66.8579 32C67.8339 31.44 68.9299 31.16 70.1459 31.16C71.3779 31.16 72.4659 31.432 73.4099 31.976C74.3539 32.52 75.0899 33.288 75.6179 34.28C76.1619 35.256 76.4339 36.4 76.4339 37.712C76.4339 37.808 76.4259 37.92 76.4099 38.048C76.4099 38.176 76.4019 38.296 76.3859 38.408H65.5619V36.752H75.1859L74.2499 37.328C74.2659 36.512 74.0979 35.784 73.7459 35.144C73.3939 34.504 72.9059 34.008 72.2819 33.656C71.6739 33.288 70.9619 33.104 70.1459 33.104C69.3459 33.104 68.6339 33.288 68.0099 33.656C67.3859 34.008 66.8979 34.512 66.5459 35.168C66.1939 35.808 66.0179 36.544 66.0179 37.376V37.76C66.0179 38.608 66.2099 39.368 66.5939 40.04C66.9939 40.696 67.5459 41.208 68.2499 41.576C68.9539 41.944 69.7619 42.128 70.6739 42.128C71.4259 42.128 72.1059 42 72.7139 41.744C73.3379 41.488 73.8819 41.104 74.3459 40.592L75.6179 42.08C75.0419 42.752 74.3219 43.264 73.4579 43.616C72.6099 43.968 71.6579 44.144 70.6019 44.144ZM86.3772 44.144C85.3212 44.144 84.3532 43.904 83.4732 43.424C82.6092 42.928 81.9132 42.2 81.3852 41.24C80.8732 40.28 80.6172 39.08 80.6172 37.64C80.6172 36.2 80.8652 35 81.3612 34.04C81.8732 33.08 82.5612 32.36 83.4252 31.88C84.3052 31.4 85.2892 31.16 86.3772 31.16C87.6252 31.16 88.7292 31.432 89.6892 31.976C90.6492 32.52 91.4092 33.28 91.9692 34.256C92.5292 35.216 92.8092 36.344 92.8092 37.64C92.8092 38.936 92.5292 40.072 91.9692 41.048C91.4092 42.024 90.6492 42.784 89.6892 43.328C88.7292 43.872 87.6252 44.144 86.3772 44.144ZM79.6332 48.656V31.28H81.8412V34.712L81.6972 37.664L81.9372 40.616V48.656H79.6332ZM86.1852 42.128C87.0012 42.128 87.7292 41.944 88.3692 41.576C89.0252 41.208 89.5372 40.688 89.9052 40.016C90.2892 39.328 90.4812 38.536 90.4812 37.64C90.4812 36.728 90.2892 35.944 89.9052 35.288C89.5372 34.616 89.0252 34.096 88.3692 33.728C87.7292 33.36 87.0012 33.176 86.1852 33.176C85.3852 33.176 84.6572 33.36 84.0012 33.728C83.3612 34.096 82.8492 34.616 82.4652 35.288C82.0972 35.944 81.9132 36.728 81.9132 37.64C81.9132 38.536 82.0972 39.328 82.4652 40.016C82.8492 40.688 83.3612 41.208 84.0012 41.576C84.6572 41.944 85.3852 42.128 86.1852 42.128ZM101.622 38.408V36.416H108.078V38.408H101.622ZM116.775 44V42.368L123.615 35.768C124.223 35.192 124.671 34.688 124.959 34.256C125.263 33.808 125.463 33.4 125.559 33.032C125.671 32.648 125.727 32.28 125.727 31.928C125.727 31.064 125.423 30.384 124.815 29.888C124.207 29.392 123.319 29.144 122.151 29.144C121.255 29.144 120.447 29.296 119.727 29.6C119.007 29.888 118.383 30.344 117.855 30.968L116.223 29.552C116.863 28.736 117.719 28.112 118.791 27.68C119.879 27.232 121.071 27.008 122.367 27.008C123.535 27.008 124.551 27.2 125.415 27.584C126.279 27.952 126.943 28.488 127.407 29.192C127.887 29.896 128.127 30.728 128.127 31.688C128.127 32.232 128.055 32.768 127.911 33.296C127.767 33.824 127.495 34.384 127.095 34.976C126.695 35.568 126.119 36.232 125.367 36.968L119.271 42.848L118.695 41.912H128.847V44H116.775Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_728_11798"
              x="0.25"
              y="0"
              width="169.086"
              height="69"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_728_11798"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_728_11798"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </FadeInLeftWithSlowBounce>
    </div>
  );
};

export default Step2;
