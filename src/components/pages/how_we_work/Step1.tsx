import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";

const Step1 = () => {
  return (
    <div className="flex items-center justify-center gap-x-10">
      {/* column  */}
      <FadeInLeftWithSlowBounce className="basis-[45%]">
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
              <g filter="url(#filter0_d_728_11764)">
                <circle cx="45" cy="45" r="40" fill="#FDFDFD" />
                <circle
                  cx="45"
                  cy="45"
                  r="39.5"
                  stroke="#F37329"
                  stroke-dasharray="2 2"
                />
              </g>
              <g filter="url(#filter1_d_728_11764)">
                <circle cx="45" cy="45" r="30" fill="#F37329" />
              </g>
              <path
                d="M40.8432 54.7192C39.9496 55.5349 38.7835 55.987 37.5737 55.987C36.3639 55.987 35.1978 55.5349 34.3042 54.7192C32.8036 55.5866 30.5001 58.1246 31.7328 59.9588C31.9216 60.2225 32.1705 60.4375 32.4588 60.5859C32.7471 60.7344 33.0666 60.812 33.3909 60.8125H41.751C42.0753 60.8121 42.3948 60.7345 42.6831 60.5862C42.9714 60.4378 43.2203 60.223 43.4091 59.9594C44.6401 58.1274 42.3362 55.5866 40.8432 54.7192Z"
                fill="#FDFDFD"
              />
              <path
                d="M41.3093 51.1694C41.1392 46.2076 33.9877 46.2191 33.8242 51.1694C33.9888 56.0979 41.1288 56.1416 41.3093 51.1694ZM49.6913 51.1694C49.8701 56.1389 57.0101 56.1012 57.1763 51.1694C57.0139 46.2213 49.8624 46.206 49.6913 51.1694Z"
                fill="#FDFDFD"
              />
              <path
                d="M56.7057 54.7192C55.813 55.5369 54.6465 55.9904 53.4359 55.9904C52.2254 55.9904 51.0588 55.5369 50.1662 54.7192C48.6748 55.5866 46.3605 58.1257 47.5959 59.9588C47.7845 60.2223 48.0331 60.4371 48.3211 60.5855C48.6091 60.734 48.9283 60.8118 49.2523 60.8125H57.613C57.9372 60.8121 58.2567 60.7345 58.545 60.5861C58.8334 60.4378 59.0822 60.2229 59.2711 59.9594C60.5016 58.1252 58.2025 55.5877 56.7057 54.7192ZM43.6977 40.0859H47.6713L51.1938 42.9073C51.2739 42.9695 51.3699 43.0082 51.4708 43.0189C51.5718 43.0296 51.6737 43.012 51.7652 42.968C51.8567 42.9239 51.9341 42.8553 51.9886 42.7697C52.0432 42.6841 52.0729 42.5849 52.0742 42.4834V40.0859H53.4934C53.8967 40.0848 54.2831 39.9241 54.5683 39.6389C54.8534 39.3537 55.0142 38.9673 55.0153 38.564V31.7095C55.015 31.3059 54.8546 30.9189 54.5692 30.6336C54.2839 30.3482 53.8969 30.1878 53.4934 30.1875H43.6977C43.2942 30.1878 42.9072 30.3482 42.6219 30.6336C42.3365 30.9189 42.1761 31.3059 42.1758 31.7095V38.564C42.1769 38.9673 42.3377 39.3537 42.6228 39.6389C42.908 39.9241 43.2944 40.0848 43.6977 40.0859Z"
                fill="#FDFDFD"
              />
              <path
                d="M41.0913 38.564V35.134H37.3616C36.9984 35.1345 36.6503 35.279 36.3936 35.5358C36.1368 35.7926 35.9925 36.1408 35.9922 36.504V42.2713C35.9925 42.6345 36.1369 42.9828 36.3937 43.2397C36.6506 43.4965 36.9989 43.6409 37.3621 43.6412H38.4657V45.5761C38.4678 45.6779 38.4981 45.7771 38.5533 45.8627C38.6084 45.9483 38.6862 46.0169 38.7781 46.0609C38.8699 46.1049 38.9721 46.1225 39.0734 46.1119C39.1747 46.1012 39.271 46.0626 39.3516 46.0004L42.2922 43.6412H45.6079C45.9711 43.6409 46.3194 43.4965 46.5763 43.2397C46.8331 42.9828 46.9775 42.6345 46.9778 42.2713V41.1732H43.6998C43.008 41.1729 42.3446 40.8979 41.8554 40.4086C41.3663 39.9194 41.0914 39.2559 41.0913 38.564Z"
                fill="#FDFDFD"
              />
              <defs>
                <filter
                  id="filter0_d_728_11764"
                  x="0"
                  y="0"
                  width="90"
                  height="90"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                    result="effect1_dropShadow_728_11764"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_728_11764"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_728_11764"
                  x="10"
                  y="10"
                  width="70"
                  height="70"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                    result="effect1_dropShadow_728_11764"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_728_11764"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <h5 className="text-center text-xl font-medium">Initial Chat</h5>
          <p className="text-center text-sm font-medium">
            We start with a friendly chat to learn about your dreams. This helps
            us know how best to support you.
          </p>

          <div className="absolute right-0 top-0 h-[100px] w-[8px] translate-y-1/3 rounded-l-full bg-primary"></div>
          <div className="absolute left-0 top-0 h-[100px] w-[8px] translate-y-1/3 rounded-r-full bg-primary"></div>
        </div>
      </FadeInLeftWithSlowBounce>
      {/* column  */}
      <div className="basis-[10%]">
        <svg
          width="160"
          height="346"
          viewBox="0 0 160 346"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M85 5C85 2.23858 82.7614 -1.20706e-07 80 0C77.2386 1.20706e-07 75 2.23858 75 5L85 5ZM75 5L75 346L85 346L85 5L75 5Z"
            fill="#F37329"
          />
          <g filter="url(#filter0_d_1732_13834)">
            <circle cx="80" cy="175" r="15" fill="#F37329" />
          </g>
          <path
            d="M0.566243 175L15 189.434L29.4338 175L15 160.566L0.566243 175ZM15 177.5L66 177.5L66 172.5L15 172.5L15 177.5Z"
            fill="#F37329"
          />
          <path
            d="M159.434 175L145 160.566L130.566 175L145 189.434L159.434 175ZM145 172.5L94 172.5L94 177.5L145 177.5L145 172.5Z"
            fill="#F37329"
          />
          <defs>
            <filter
              id="filter0_d_1732_13834"
              x="60"
              y="155"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                result="effect1_dropShadow_1732_13834"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1732_13834"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      {/* column  */}
      <FadeInRightWithSlowBounce className="flex basis-[45%] items-center justify-start">
        <svg
          width="170"
          height="69"
          viewBox="0 0 170 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_728_11777)">
            <path
              d="M28.8252 7.3747C30.3279 5.85512 32.3762 5 34.5134 5H137.387C139.684 5 141.87 5.98725 143.389 7.71039L162.338 29.2104C165.002 32.2335 165.002 36.7665 162.338 39.7896L143.389 61.2896C141.87 63.0128 139.684 64 137.387 64H34.5134C32.3762 64 30.3279 63.1449 28.8252 61.6253L7.56305 40.1253C4.4807 37.0085 4.4807 31.9915 7.56305 28.8747L28.8252 7.3747Z"
              fill="#F37329"
            />
          </g>
          <path
            d="M48.6973 44.192C47.4173 44.192 46.1933 44 45.0253 43.616C43.8573 43.216 42.9373 42.704 42.2653 42.08L43.1533 40.208C43.7933 40.768 44.6093 41.232 45.6013 41.6C46.5933 41.968 47.6253 42.152 48.6973 42.152C49.6733 42.152 50.4653 42.04 51.0733 41.816C51.6813 41.592 52.1293 41.288 52.4173 40.904C52.7053 40.504 52.8493 40.056 52.8493 39.56C52.8493 38.984 52.6573 38.52 52.2733 38.168C51.9053 37.816 51.4173 37.536 50.8093 37.328C50.2173 37.104 49.5613 36.912 48.8413 36.752C48.1213 36.592 47.3933 36.408 46.6573 36.2C45.9373 35.976 45.2733 35.696 44.6653 35.36C44.0733 35.024 43.5933 34.576 43.2253 34.016C42.8573 33.44 42.6733 32.704 42.6733 31.808C42.6733 30.944 42.8973 30.152 43.3453 29.432C43.8093 28.696 44.5133 28.112 45.4573 27.68C46.4173 27.232 47.6333 27.008 49.1053 27.008C50.0813 27.008 51.0493 27.136 52.0093 27.392C52.9693 27.648 53.8013 28.016 54.5052 28.496L53.7133 30.416C52.9933 29.936 52.2333 29.592 51.4333 29.384C50.6333 29.16 49.8573 29.048 49.1053 29.048C48.1613 29.048 47.3853 29.168 46.7773 29.408C46.1693 29.648 45.7213 29.968 45.4333 30.368C45.1613 30.768 45.0253 31.216 45.0253 31.712C45.0253 32.304 45.2093 32.776 45.5773 33.128C45.9613 33.48 46.4493 33.76 47.0413 33.968C47.6493 34.176 48.3133 34.368 49.0333 34.544C49.7533 34.704 50.4733 34.888 51.1933 35.096C51.9293 35.304 52.5933 35.576 53.1853 35.912C53.7933 36.248 54.2813 36.696 54.6493 37.256C55.0173 37.816 55.2013 38.536 55.2013 39.416C55.2013 40.264 54.9693 41.056 54.5052 41.792C54.0413 42.512 53.3213 43.096 52.3453 43.544C51.3853 43.976 50.1693 44.192 48.6973 44.192ZM62.7395 44.144C61.4595 44.144 60.4675 43.8 59.7635 43.112C59.0595 42.424 58.7075 41.44 58.7075 40.16V28.496H61.0115V40.064C61.0115 40.752 61.1795 41.28 61.5155 41.648C61.8675 42.016 62.3635 42.2 63.0035 42.2C63.7235 42.2 64.3235 42 64.8035 41.6L65.5235 43.256C65.1715 43.56 64.7475 43.784 64.2515 43.928C63.7715 44.072 63.2675 44.144 62.7395 44.144ZM56.5475 33.176V31.28H64.6595V33.176H56.5475ZM73.5511 44.144C72.1911 44.144 70.9911 43.864 69.9511 43.304C68.9271 42.744 68.1271 41.976 67.5511 41C66.9911 40.024 66.7111 38.904 66.7111 37.64C66.7111 36.376 66.9831 35.256 67.5271 34.28C68.0871 33.304 68.8471 32.544 69.8071 32C70.7831 31.44 71.8791 31.16 73.0951 31.16C74.3271 31.16 75.4151 31.432 76.3591 31.976C77.3031 32.52 78.0391 33.288 78.5671 34.28C79.1111 35.256 79.3831 36.4 79.3831 37.712C79.3831 37.808 79.3751 37.92 79.3591 38.048C79.3591 38.176 79.3511 38.296 79.3351 38.408H68.5111V36.752H78.1351L77.1991 37.328C77.2151 36.512 77.0471 35.784 76.6951 35.144C76.3431 34.504 75.8551 34.008 75.2311 33.656C74.6231 33.288 73.9111 33.104 73.0951 33.104C72.2951 33.104 71.5831 33.288 70.9591 33.656C70.3351 34.008 69.8471 34.512 69.4951 35.168C69.1431 35.808 68.9671 36.544 68.9671 37.376V37.76C68.9671 38.608 69.1591 39.368 69.5431 40.04C69.9431 40.696 70.4951 41.208 71.1991 41.576C71.9031 41.944 72.7111 42.128 73.6231 42.128C74.3751 42.128 75.0551 42 75.6631 41.744C76.2871 41.488 76.8311 41.104 77.2951 40.592L78.5671 42.08C77.9911 42.752 77.2711 43.264 76.4071 43.616C75.5591 43.968 74.6071 44.144 73.5511 44.144ZM89.3264 44.144C88.2704 44.144 87.3024 43.904 86.4224 43.424C85.5584 42.928 84.8624 42.2 84.3344 41.24C83.8224 40.28 83.5664 39.08 83.5664 37.64C83.5664 36.2 83.8144 35 84.3104 34.04C84.8224 33.08 85.5104 32.36 86.3744 31.88C87.2544 31.4 88.2384 31.16 89.3264 31.16C90.5744 31.16 91.6784 31.432 92.6384 31.976C93.5984 32.52 94.3584 33.28 94.9184 34.256C95.4784 35.216 95.7584 36.344 95.7584 37.64C95.7584 38.936 95.4784 40.072 94.9184 41.048C94.3584 42.024 93.5984 42.784 92.6384 43.328C91.6784 43.872 90.5744 44.144 89.3264 44.144ZM82.5824 48.656V31.28H84.7904V34.712L84.6464 37.664L84.8864 40.616V48.656H82.5824ZM89.1344 42.128C89.9504 42.128 90.6784 41.944 91.3184 41.576C91.9744 41.208 92.4864 40.688 92.8544 40.016C93.2384 39.328 93.4304 38.536 93.4304 37.64C93.4304 36.728 93.2384 35.944 92.8544 35.288C92.4864 34.616 91.9744 34.096 91.3184 33.728C90.6784 33.36 89.9504 33.176 89.1344 33.176C88.3344 33.176 87.6064 33.36 86.9504 33.728C86.3104 34.096 85.7984 34.616 85.4144 35.288C85.0464 35.944 84.8624 36.728 84.8624 37.64C84.8624 38.536 85.0464 39.328 85.4144 40.016C85.7984 40.688 86.3104 41.208 86.9504 41.576C87.6064 41.944 88.3344 42.128 89.1344 42.128ZM104.571 38.408V36.416H111.027V38.408H104.571ZM122.82 44V28.16L123.852 29.288H119.028V27.2H125.196V44H122.82Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_728_11777"
              x="0.25"
              y="0"
              width="169.086"
              height="69"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                result="effect1_dropShadow_728_11777"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_728_11777"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </FadeInRightWithSlowBounce>
    </div>
  );
};

export default Step1;
