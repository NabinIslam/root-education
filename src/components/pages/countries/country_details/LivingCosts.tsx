import Section from "@/components/common/Section";
import ServicesIncludedCard from "../../services/pre_departure_briefing/ServicesIncludedCard";

const LivingCosts = () => {
  return (
    <Section
      sectionName="Living Costs"
      title="Best Guide to Student Living Costs"
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <ServicesIncludedCard
          icon={
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1632_8112)">
                <path
                  d="M6.44531 5.27344H14.0625C14.5479 5.27344 14.9414 4.87992 14.9414 4.39453V3.51562C14.9414 2.54479 14.1544 1.75781 13.1836 1.75781H12.0117C12.0117 0.786973 11.2247 0 10.2539 0C9.28307 0 8.49609 0.786973 8.49609 1.75781H7.32422C6.35338 1.75781 5.56641 2.54479 5.56641 3.51562V4.39453C5.56641 4.87992 5.95992 5.27344 6.44531 5.27344ZM5.27344 21.0938H7.03125V22.8516H5.27344V21.0938ZM5.27344 14.0625H7.03125V15.8203H5.27344V14.0625Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M17.8711 4.10156H16.6992V4.39453C16.6992 5.84842 15.5164 7.03125 14.0625 7.03125H6.44531C4.99143 7.03125 3.80859 5.84842 3.80859 4.39453V4.10156H2.63672C1.18283 4.10156 0 5.28439 0 6.73828V27.3633C0 28.8172 1.18283 30 2.63672 30H17.8711C19.325 30 20.5078 28.8172 20.5078 27.3633V6.73828C20.5078 5.28439 19.325 4.10156 17.8711 4.10156ZM6.73828 8.78906H13.7695C14.2549 8.78906 14.6484 9.18258 14.6484 9.66797C14.6484 10.1534 14.2549 10.5469 13.7695 10.5469H6.73828C6.25289 10.5469 5.85938 10.1534 5.85938 9.66797C5.85938 9.18258 6.25289 8.78906 6.73828 8.78906ZM8.78906 23.7305C8.78906 24.2159 8.39555 24.6094 7.91016 24.6094H4.39453C3.90914 24.6094 3.51562 24.2159 3.51562 23.7305V20.2148C3.51562 19.7295 3.90914 19.3359 4.39453 19.3359H7.91016C8.39555 19.3359 8.78906 19.7295 8.78906 20.2148V23.7305ZM8.78906 16.6992C8.78906 17.1846 8.39555 17.5781 7.91016 17.5781H4.39453C3.90914 17.5781 3.51562 17.1846 3.51562 16.6992V13.1836C3.51562 12.6982 3.90914 12.3047 4.39453 12.3047H7.91016C8.39555 12.3047 8.78906 12.6982 8.78906 13.1836V16.6992ZM16.1133 24.6094H11.4258C10.9404 24.6094 10.5469 24.2159 10.5469 23.7305C10.5469 23.2451 10.9404 22.8516 11.4258 22.8516H16.1133C16.5987 22.8516 16.9922 23.2451 16.9922 23.7305C16.9922 24.2159 16.5987 24.6094 16.1133 24.6094ZM16.1133 21.0938H11.4258C10.9404 21.0938 10.5469 20.7002 10.5469 20.2148C10.5469 19.7295 10.9404 19.3359 11.4258 19.3359H16.1133C16.5987 19.3359 16.9922 19.7295 16.9922 20.2148C16.9922 20.7002 16.5987 21.0938 16.1133 21.0938ZM16.1133 17.5781H11.4258C10.9404 17.5781 10.5469 17.1846 10.5469 16.6992C10.5469 16.2138 10.9404 15.8203 11.4258 15.8203H16.1133C16.5987 15.8203 16.9922 16.2138 16.9922 16.6992C16.9922 17.1846 16.5987 17.5781 16.1133 17.5781ZM16.1133 14.0625H11.4258C10.9404 14.0625 10.5469 13.669 10.5469 13.1836C10.5469 12.6982 10.9404 12.3047 11.4258 12.3047H16.1133C16.5987 12.3047 16.9922 12.6982 16.9922 13.1836C16.9922 13.669 16.5987 14.0625 16.1133 14.0625ZM24.1406 11.7188C24.1406 12.4826 24.6305 13.1339 25.3125 13.3758V16.1133C25.3125 16.5987 25.706 16.9922 26.1914 16.9922C26.6768 16.9922 27.0703 16.5987 27.0703 16.1133V13.3758C27.7523 13.1339 28.2422 12.4826 28.2422 11.7188V8.78906H24.1406V11.7188ZM29.1211 3.51562H27.0703V1.75781H27.9492C28.4346 1.75781 28.8281 1.3643 28.8281 0.878906C28.8281 0.393516 28.4346 0 27.9492 0H24.4336C23.9482 0 23.5547 0.393516 23.5547 0.878906C23.5547 1.3643 23.9482 1.75781 24.4336 1.75781H25.3125V3.51562H23.2617C22.7763 3.51562 22.3828 3.90914 22.3828 4.39453C22.3828 4.87992 22.7763 5.27344 23.2617 5.27344H24.1406V7.03125H28.2422V5.27344H29.1211C29.6065 5.27344 30 4.87992 30 4.39453C30 3.90914 29.6065 3.51562 29.1211 3.51562Z"
                  fill="#FDFDFD"
                />
              </g>
              <defs>
                <clipPath id="clip0_1632_8112">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Documentation Assistance"
          description="We guide you through the essential travel documents, including visas and health insurance, ensuring you're well-prepared for your trip."
        />
        <ServicesIncludedCard
          icon={
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1632_5726)">
                <path
                  d="M14.9995 3.6171C16.2189 3.6171 17.4026 3.77301 18.5318 4.0657C18.5546 3.90293 18.5672 3.73688 18.5672 3.56789C18.5673 1.60053 16.9668 0 14.9995 0C13.0322 0 11.4316 1.60053 11.4316 3.56783C11.4316 3.73682 11.4443 3.90287 11.4671 4.0657C12.5964 3.77301 13.78 3.6171 14.9995 3.6171ZM14.9995 22.1964L16.57 17.7041L14.9995 13.212L13.4289 17.7041L14.9995 22.1964Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M6.91961 8.4018L8.32211 9.80431L7.07786 11.0486L5.67682 9.64753C3.98596 11.6015 2.89819 14.0906 2.70428 16.8228H4.69076V18.5825H2.7041C2.89807 21.3248 3.99253 23.8222 5.69341 25.7798L7.08589 24.3873L8.33015 25.6316L6.93855 27.0232C8.89289 28.716 11.3833 29.8052 14.117 29.9997V28.0426H15.8767V30C18.6107 29.8069 21.1015 28.719 23.0565 27.0272L21.6849 25.6555L22.9291 24.4112L24.3022 25.7844C26.0055 23.8261 27.1015 21.3269 27.2957 18.5825H25.3481V16.8228H27.2955C27.1014 14.0884 26.0121 11.5975 24.3189 9.64283L22.9371 11.0247L21.6928 9.78044L23.0755 8.39776C21.1176 6.69657 18.6196 5.60206 15.8768 5.40833V7.38536H14.1171V5.40868C11.3743 5.60371 8.87676 6.69951 6.91961 8.4018ZM14.1251 10.382H15.8745L18.4344 17.7041L15.8745 25.0263H14.1251L11.5651 17.7041L14.1251 10.382Z"
                  fill="#FDFDFD"
                />
              </g>
              <defs>
                <clipPath id="clip0_1632_5726">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Cultural Orientation"
          description="Our sessions provide valuable insights into local customs and etiquette, helping you adapt seamlessly to your new environment."
        />
        <ServicesIncludedCard
          icon={
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 20C22.6235 20 22.7442 20.0365 22.8469 20.105L23.75 20.7075V17.5H21.25V20.7075L22.1531 20.105C22.2558 20.0365 22.3765 20 22.5 20Z"
                fill="#FDFDFD"
              />
              <path
                d="M26.25 17.5H25V21.875C25 21.9881 24.9693 22.0992 24.9112 22.1962C24.853 22.2933 24.7696 22.3728 24.6699 22.4261C24.5701 22.4795 24.4577 22.5048 24.3447 22.4993C24.2317 22.4938 24.1222 22.4578 24.0281 22.395L22.5 21.375L20.9719 22.3937C20.8778 22.4565 20.7685 22.4925 20.6556 22.4981C20.5427 22.5036 20.4304 22.4784 20.3307 22.4252C20.231 22.372 20.1475 22.2927 20.0893 22.1958C20.0311 22.0989 20.0002 21.988 20 21.875V17.5H18.75C18.2527 17.5 17.7758 17.6975 17.4242 18.0491C17.0725 18.4008 16.875 18.8777 16.875 19.375V26.25C16.875 26.7473 17.0725 27.2242 17.4242 27.5758C17.7758 27.9274 18.2527 28.125 18.75 28.125H26.25C26.7473 28.125 27.2242 27.9274 27.5758 27.5758C27.9275 27.2242 28.125 26.7473 28.125 26.25V19.375C28.125 18.8777 27.9275 18.4008 27.5758 18.0491C27.2242 17.6975 26.7473 17.5 26.25 17.5ZM6.5625 14.0625H8.43813V15.9375H6.5625V14.0625ZM6.5625 7.81247H8.43813V9.68747H6.5625V7.81247ZM6.5625 20.3125H8.43813V22.1875H6.5625V20.3125ZM18.125 8.74997C18.125 8.91573 18.1908 9.07471 18.3081 9.19192C18.4253 9.30913 18.5842 9.37497 18.75 9.37497H24.2106C24.0776 8.95474 23.8567 8.56763 23.5625 8.23935L18.7069 2.8981C18.5337 2.7121 18.3383 2.54816 18.125 2.40997V8.74997Z"
                fill="#FDFDFD"
              />
              <path
                d="M18.75 10.625C18.2532 10.6235 17.7771 10.4255 17.4258 10.0742C17.0745 9.72288 16.8765 9.24682 16.875 8.75V1.925C16.7162 1.89567 16.5552 1.87895 16.3937 1.875H5C4.1712 1.875 3.37634 2.20424 2.79029 2.79029C2.20424 3.37634 1.875 4.1712 1.875 5V25C1.875 25.8288 2.20424 26.6237 2.79029 27.2097C3.37634 27.7958 4.1712 28.125 5 28.125H16.25C15.8419 27.5853 15.6223 26.9266 15.625 26.25V19.375C15.625 18.5462 15.9542 17.7513 16.5403 17.1653C17.1263 16.5792 17.9212 16.25 18.75 16.25H24.375V10.625H18.75ZM11.25 6.875H14.375C14.5408 6.875 14.6997 6.94085 14.8169 7.05806C14.9342 7.17527 15 7.33424 15 7.5C15 7.66576 14.9342 7.82473 14.8169 7.94194C14.6997 8.05915 14.5408 8.125 14.375 8.125H11.25C11.0842 8.125 10.9253 8.05915 10.8081 7.94194C10.6908 7.82473 10.625 7.66576 10.625 7.5C10.625 7.33424 10.6908 7.17527 10.8081 7.05806C10.9253 6.94085 11.0842 6.875 11.25 6.875ZM9.6875 22.1875C9.68651 22.5187 9.5545 22.8361 9.32029 23.0703C9.08608 23.3045 8.76872 23.4365 8.4375 23.4375H6.5625C6.23128 23.4365 5.91392 23.3045 5.67971 23.0703C5.4455 22.8361 5.31349 22.5187 5.3125 22.1875V20.3125C5.31349 19.9813 5.4455 19.6639 5.67971 19.4297C5.91392 19.1955 6.23128 19.0635 6.5625 19.0625H8.4375C8.76872 19.0635 9.08608 19.1955 9.32029 19.4297C9.5545 19.6639 9.68651 19.9813 9.6875 20.3125V22.1875ZM9.6875 15.9375C9.68651 16.2687 9.5545 16.5861 9.32029 16.8203C9.08608 17.0545 8.76872 17.1865 8.4375 17.1875H6.5625C6.23128 17.1865 5.91392 17.0545 5.67971 16.8203C5.4455 16.5861 5.31349 16.2687 5.3125 15.9375V14.0625C5.31349 13.7313 5.4455 13.4139 5.67971 13.1797C5.91392 12.9455 6.23128 12.8135 6.5625 12.8125H8.4375C8.76872 12.8135 9.08608 12.9455 9.32029 13.1797C9.5545 13.4139 9.68651 13.7313 9.6875 14.0625V15.9375ZM9.6875 9.6875C9.68651 10.0187 9.5545 10.3361 9.32029 10.5703C9.08608 10.8045 8.76872 10.9365 8.4375 10.9375H6.5625C6.23128 10.9365 5.91392 10.8045 5.67971 10.5703C5.4455 10.3361 5.31349 10.0187 5.3125 9.6875V7.8125C5.31349 7.48128 5.4455 7.16392 5.67971 6.92971C5.91392 6.6955 6.23128 6.56349 6.5625 6.5625H8.4375C8.76872 6.56349 9.08608 6.6955 9.32029 6.92971C9.5545 7.16392 9.68651 7.48128 9.6875 7.8125V9.6875ZM14.375 23.125H11.25C11.0842 23.125 10.9253 23.0592 10.8081 22.9419C10.6908 22.8247 10.625 22.6658 10.625 22.5C10.625 22.3342 10.6908 22.1753 10.8081 22.0581C10.9253 21.9408 11.0842 21.875 11.25 21.875H14.375C14.5408 21.875 14.6997 21.9408 14.8169 22.0581C14.9342 22.1753 15 22.3342 15 22.5C15 22.6658 14.9342 22.8247 14.8169 22.9419C14.6997 23.0592 14.5408 23.125 14.375 23.125ZM14.375 20.625H11.25C11.0842 20.625 10.9253 20.5592 10.8081 20.4419C10.6908 20.3247 10.625 20.1658 10.625 20C10.625 19.8342 10.6908 19.6753 10.8081 19.5581C10.9253 19.4408 11.0842 19.375 11.25 19.375H14.375C14.5408 19.375 14.6997 19.4408 14.8169 19.5581C14.9342 19.6753 15 19.8342 15 20C15 20.1658 14.9342 20.3247 14.8169 20.4419C14.6997 20.5592 14.5408 20.625 14.375 20.625ZM14.375 16.875H11.25C11.0842 16.875 10.9253 16.8092 10.8081 16.6919C10.6908 16.5747 10.625 16.4158 10.625 16.25C10.625 16.0842 10.6908 15.9253 10.8081 15.8081C10.9253 15.6908 11.0842 15.625 11.25 15.625H14.375C14.5408 15.625 14.6997 15.6908 14.8169 15.8081C14.9342 15.9253 15 16.0842 15 16.25C15 16.4158 14.9342 16.5747 14.8169 16.6919C14.6997 16.8092 14.5408 16.875 14.375 16.875ZM10.625 13.75C10.625 13.5842 10.6908 13.4253 10.8081 13.3081C10.9253 13.1908 11.0842 13.125 11.25 13.125H14.375C14.5408 13.125 14.6997 13.1908 14.8169 13.3081C14.9342 13.4253 15 13.5842 15 13.75C15 13.9158 14.9342 14.0747 14.8169 14.1919C14.6997 14.3092 14.5408 14.375 14.375 14.375H11.25C11.0842 14.375 10.9253 14.3092 10.8081 14.1919C10.6908 14.0747 10.625 13.9158 10.625 13.75ZM15.625 10.625H11.25C11.0842 10.625 10.9253 10.5592 10.8081 10.4419C10.6908 10.3247 10.625 10.1658 10.625 10C10.625 9.83424 10.6908 9.67527 10.8081 9.55806C10.9253 9.44085 11.0842 9.375 11.25 9.375H15.625C15.7908 9.375 15.9497 9.44085 16.0669 9.55806C16.1842 9.67527 16.25 9.83424 16.25 10C16.25 10.1658 16.1842 10.3247 16.0669 10.4419C15.9497 10.5592 15.7908 10.625 15.625 10.625Z"
                fill="#FDFDFD"
              />
            </svg>
          }
          title="Packing Checklist"
          description="Receive a tailored packing list that highlights essential items to bring, ensuring you have everything needed for your studies abroad."
        />
        <ServicesIncludedCard
          icon={
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.46625 0.585938H17.1665V4.57348C17.1665 5.36666 17.811 6.01119 18.6043 6.01119H22.5918V17.2939C18.9217 17.2939 15.9459 20.2697 15.9459 23.9398C15.9459 24.9419 16.1682 25.8919 16.5655 26.7441H2.46625C2.17346 26.7441 1.93457 26.5052 1.93457 26.2124V1.11762C1.93463 0.824766 2.17346 0.585938 2.46625 0.585938ZM18.3385 0.632051V4.57354C18.3386 4.644 18.3667 4.71153 18.4165 4.76136C18.4663 4.81118 18.5339 4.83924 18.6043 4.83938H22.5458C22.5189 4.7813 22.4818 4.72854 22.4362 4.68363L18.4942 0.74168C18.4493 0.696102 18.3965 0.658968 18.3385 0.632051ZM14.4409 19.3296H6.94346C6.80381 19.3317 6.67059 19.3886 6.57257 19.4881C6.47456 19.5876 6.41961 19.7216 6.41961 19.8613C6.41961 20.0009 6.47456 20.135 6.57257 20.2345C6.67059 20.334 6.80381 20.3909 6.94346 20.393H14.4409C14.5806 20.3909 14.7138 20.334 14.8118 20.2345C14.9098 20.135 14.9648 20.0009 14.9648 19.8613C14.9648 19.7216 14.9098 19.5876 14.8118 19.4881C14.7138 19.3886 14.5806 19.3317 14.4409 19.3296ZM14.4409 22.5656H6.94346C6.80381 22.5676 6.67059 22.6246 6.57257 22.7241C6.47456 22.8235 6.41961 22.9576 6.41961 23.0972C6.41961 23.2369 6.47456 23.371 6.57257 23.4704C6.67059 23.5699 6.80381 23.6269 6.94346 23.6289H14.4409C14.5806 23.6269 14.7138 23.5699 14.8118 23.4704C14.9098 23.371 14.9648 23.2369 14.9648 23.0972C14.9648 22.9576 14.9098 22.8235 14.8118 22.7241C14.7138 22.6246 14.5806 22.5676 14.4409 22.5656ZM17.583 16.0937H6.94346C6.80381 16.0958 6.67059 16.1527 6.57257 16.2522C6.47456 16.3517 6.41961 16.4857 6.41961 16.6254C6.41961 16.765 6.47456 16.8991 6.57257 16.9986C6.67059 17.0981 6.80381 17.155 6.94346 17.1571H17.583C17.7226 17.155 17.8558 17.0981 17.9539 16.9986C18.0519 16.8991 18.1068 16.7651 18.1068 16.6254C18.1068 16.4858 18.0519 16.3517 17.9539 16.2522C17.8559 16.1527 17.7227 16.0958 17.583 16.0937ZM11.0427 5.0598C10.9723 5.05993 10.9047 5.08797 10.8549 5.13778C10.8051 5.1876 10.777 5.25513 10.7769 5.32559V7.29516H8.80738C8.73692 7.2953 8.66938 7.32335 8.61956 7.37317C8.56974 7.423 8.54168 7.49053 8.54154 7.561V10.002C8.54168 10.0725 8.56974 10.14 8.61956 10.1898C8.66939 10.2396 8.73693 10.2677 8.80738 10.2678H10.7769V12.2374C10.777 12.3078 10.8051 12.3754 10.8549 12.4252C10.9047 12.475 10.9723 12.5031 11.0427 12.5032H13.4838C13.5542 12.5031 13.6217 12.475 13.6716 12.4252C13.7214 12.3754 13.7495 12.3078 13.7496 12.2374V10.2678H15.7192C15.7896 10.2677 15.8571 10.2396 15.9069 10.1898C15.9568 10.14 15.9848 10.0725 15.9849 10.002V7.561C15.9848 7.49054 15.9568 7.423 15.907 7.37318C15.8571 7.32335 15.7896 7.2953 15.7192 7.29516H13.7496V5.32564C13.7495 5.25519 13.7214 5.18766 13.6716 5.13784C13.6217 5.08803 13.5542 5.05999 13.4838 5.05986L11.0427 5.0598ZM28.066 23.9398C28.066 20.9164 25.6151 18.4658 22.5919 18.4658C19.5685 18.4658 17.1178 20.9164 17.1178 23.9398C17.1178 26.963 19.5685 29.4139 22.5919 29.4139C25.6151 29.4139 28.066 26.963 28.066 23.9398ZM23.1872 27.0111C23.4912 26.9235 23.7652 26.7708 23.9889 26.571C24.3684 26.2321 24.6032 25.7603 24.6032 25.2361C24.6032 24.7119 24.3684 24.2401 23.9889 23.9012C23.6264 23.5775 23.1321 23.3773 22.5919 23.3773C22.3449 23.3773 22.1266 23.2925 21.9732 23.1556C21.8369 23.0339 21.7525 22.8692 21.7525 22.6904C21.7525 22.5117 21.8368 22.347 21.9732 22.2253C22.1281 22.0869 22.3467 22.0013 22.5919 22.0013C22.7092 22.0014 22.8256 22.0225 22.9356 22.0634C23.0422 22.1028 23.1355 22.1582 23.2107 22.2254C23.4508 22.4403 23.8197 22.4198 24.0347 22.1796C24.2495 21.9394 24.2291 21.5705 23.9889 21.3556C23.7528 21.145 23.4709 20.9923 23.1655 20.9094L23.1586 20.6193C23.1511 20.2969 22.8836 20.0418 22.5613 20.0493C22.2389 20.0569 21.9838 20.3244 21.9913 20.6467L21.9978 20.9166C21.6926 21.0038 21.4182 21.1561 21.1949 21.3555C20.8154 21.6945 20.5806 22.1663 20.5806 22.6904C20.5806 23.2147 20.8154 23.6864 21.1949 24.0253C21.5574 24.349 22.0517 24.5492 22.5919 24.5492C22.8389 24.5492 23.0573 24.6339 23.2107 24.7709C23.347 24.8926 23.4313 25.0573 23.4313 25.236C23.4313 25.4147 23.347 25.5795 23.2107 25.7012C23.0573 25.8381 22.8389 25.9229 22.5919 25.9229C22.4204 25.9229 22.2968 25.8948 22.194 25.8428C22.0717 25.781 21.9463 25.6742 21.7999 25.536C21.5648 25.3148 21.1948 25.3261 20.9736 25.5612C20.7524 25.7964 20.7637 26.1663 20.9988 26.3875C21.2179 26.5942 21.4196 26.7611 21.6675 26.8865C21.7799 26.9437 21.8978 26.9894 22.0194 27.0229L22.0251 27.2604C22.0327 27.5827 22.3002 27.8379 22.6225 27.8303C22.9448 27.8228 23.2 27.5553 23.1924 27.233L23.1872 27.0111Z"
                fill="#FDFDFD"
              />
            </svg>
          }
          title="Health & Safety Guidance"
          description="Learn about local healthcare systems, emergency contacts, and safety tips to ensure your well-being while abroad."
        />
        <ServicesIncludedCard
          icon={
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1632_315)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8453 27.9727C18.0425 28.2674 18.2632 28.5457 18.5054 28.8047H2.70641C2.3121 28.803 1.93442 28.6457 1.65561 28.3669C1.37679 28.088 1.21942 27.7104 1.21777 27.3161V1.48693C1.21909 1.09269 1.3764 0.714984 1.65534 0.436366C1.93428 0.157748 2.31216 0.000865352 2.70641 4.47327e-07H18.8069C18.8613 -7.9617e-05 18.9152 0.0105887 18.9654 0.031393C19.0157 0.0521972 19.0614 0.0827275 19.0998 0.121231L23.2862 4.30764C23.326 4.34637 23.3577 4.39266 23.3794 4.44381C23.4011 4.49495 23.4124 4.54991 23.4126 4.60547V17.9865C23.3384 17.9848 23.2644 17.9831 23.1903 17.9831C22.9848 17.9831 22.781 17.9933 22.5809 18.0118V5.02148H18.8069C18.7522 5.02148 18.6981 5.01072 18.6477 4.98982C18.5972 4.96891 18.5513 4.93827 18.5127 4.89964C18.4741 4.86101 18.4434 4.81515 18.4225 4.76467C18.4016 4.7142 18.3908 4.6601 18.3908 4.60547V0.832032H2.70641C2.53264 0.832447 2.36608 0.901544 2.24305 1.02426C2.12002 1.14697 2.05049 1.31334 2.04963 1.48711V27.3158C2.05077 27.4896 2.12032 27.656 2.24324 27.779C2.36616 27.9019 2.53256 27.9715 2.70641 27.9727H17.8453ZM10.227 12.7477H11.8975V8.91832H10.227V12.7477ZM13.4232 12.7477H15.094V5.88715H13.4235L13.4232 12.7477ZM3.83633 8.47711V12.7477H5.50514V8.47711H3.83633ZM8.70137 6.4227H7.0325V12.7477H8.70143L8.70137 6.4227ZM11.3923 6.92279L14.2503 4.14258V4.23018C14.25 4.34004 14.2935 4.4455 14.371 4.52334C14.4485 4.60118 14.5538 4.64504 14.6637 4.64525C14.7736 4.64547 14.879 4.60204 14.9569 4.5245C15.0347 4.44697 15.0786 4.34168 15.0788 4.23182L15.087 3.16406C15.0883 3.10964 15.079 3.05549 15.0594 3.0047C15.0398 2.9539 15.0104 2.90747 14.9728 2.86806C14.9353 2.82865 14.8903 2.79703 14.8405 2.77501C14.7907 2.75298 14.7371 2.741 14.6827 2.73973L13.6066 2.70604C13.4972 2.7037 13.3913 2.74472 13.3121 2.82015C13.2328 2.89558 13.1866 2.99929 13.1835 3.10866C13.1804 3.21803 13.2207 3.32418 13.2956 3.40397C13.3704 3.48375 13.4738 3.5307 13.5832 3.53455L13.6828 3.53795L11.0743 6.07564L8.12545 3.44531C8.05434 3.37759 7.96155 3.33722 7.86352 3.33138C7.76549 3.32553 7.66856 3.35458 7.5899 3.41338L4.38195 5.81139C4.29375 5.87726 4.23532 5.97548 4.21953 6.08443C4.21171 6.13837 4.2146 6.19333 4.22802 6.24617C4.24144 6.299 4.26514 6.34867 4.29775 6.39234C4.33037 6.43602 4.37127 6.47284 4.41812 6.50071C4.46497 6.52858 4.51685 6.54695 4.57079 6.55476C4.67974 6.57055 4.79051 6.54242 4.87871 6.47654L7.81555 4.28232L10.8097 6.95315C10.8915 7.0252 10.9983 7.06236 11.1072 7.05669C11.2161 7.05102 11.3184 7.00296 11.3923 6.92279ZM7.69771 20.1403H3.83639V16.2807H7.69771V20.1403ZM6.90793 17.3145C6.82984 17.2368 6.72418 17.1932 6.61405 17.1932C6.50392 17.1932 6.39827 17.2368 6.32018 17.3145L5.41256 18.2239L5.21381 18.0253C5.17522 17.9866 5.12939 17.9558 5.07893 17.9348C5.02846 17.9139 4.97436 17.903 4.91971 17.9029C4.86506 17.9029 4.81093 17.9135 4.76041 17.9344C4.70989 17.9552 4.66396 17.9858 4.62526 18.0244C4.58656 18.063 4.55584 18.1088 4.53486 18.1593C4.51387 18.2097 4.50303 18.2638 4.50295 18.3185C4.50287 18.3732 4.51355 18.4273 4.5344 18.4778C4.55524 18.5283 4.58583 18.5742 4.62441 18.6129L5.11783 19.1064C5.1959 19.184 5.30155 19.2277 5.41168 19.2277C5.52181 19.2277 5.62746 19.184 5.70553 19.1064L6.90793 17.904C6.94675 17.8654 6.97755 17.8194 6.99856 17.7688C7.01958 17.7183 7.0304 17.664 7.0304 17.6092C7.0304 17.5545 7.01958 17.5002 6.99856 17.4496C6.97755 17.399 6.94675 17.3531 6.90793 17.3145ZM9.3108 20.4569H15.8598C15.9699 20.4569 16.0755 20.4132 16.1533 20.3353C16.2312 20.2575 16.2749 20.1519 16.2749 20.0418C16.2749 19.9317 16.2312 19.8262 16.1533 19.7483C16.0755 19.6705 15.9699 19.6267 15.8598 19.6267H9.3108C9.20072 19.6267 9.09514 19.6705 9.0173 19.7483C8.93945 19.8262 8.89572 19.9317 8.89572 20.0418C8.89572 20.1519 8.93945 20.2575 9.0173 20.3353C9.09514 20.4132 9.20072 20.4569 9.3108 20.4569ZM17.4562 21.506H9.3108C9.20047 21.506 9.09465 21.5498 9.01663 21.6279C8.93862 21.7059 8.89478 21.8117 8.89478 21.922C8.89478 22.0324 8.93862 22.1382 9.01663 22.2162C9.09465 22.2942 9.20047 22.338 9.3108 22.338H17.1061C17.2029 22.0527 17.32 21.7747 17.4563 21.506H17.4562ZM20.7939 15.8647H9.3108C9.20047 15.8647 9.09465 15.9086 9.01663 15.9866C8.93862 16.0646 8.89478 16.1704 8.89478 16.2807C8.89478 16.3911 8.93862 16.4969 9.01663 16.5749C9.09465 16.6529 9.20047 16.6968 9.3108 16.6968H20.794C20.9043 16.6968 21.0102 16.6529 21.0882 16.5749C21.1662 16.4969 21.21 16.3911 21.21 16.2807C21.21 16.1704 21.1662 16.0646 21.0882 15.9866C21.0102 15.9086 20.9043 15.8647 20.794 15.8647H20.7939ZM16.8467 23.3871H9.3108C9.20047 23.3871 9.09465 23.4309 9.01663 23.5089C8.93862 23.5869 8.89478 23.6927 8.89478 23.8031C8.89478 23.9134 8.93862 24.0192 9.01663 24.0972C9.09465 24.1753 9.20047 24.2191 9.3108 24.2191H16.7676C16.776 23.9403 16.8024 23.6624 16.8467 23.3871ZM9.3108 25.268C9.20047 25.268 9.09465 25.3119 9.01663 25.3899C8.93862 25.4679 8.89478 25.5737 8.89478 25.684C8.89478 25.7944 8.93862 25.9002 9.01663 25.9782C9.09465 26.0562 9.20047 26.1001 9.3108 26.1001H15.8598C15.9702 26.1001 16.076 26.0562 16.154 25.9782C16.232 25.9002 16.2758 25.7944 16.2758 25.684C16.2758 25.5737 16.232 25.4679 16.154 25.3899C16.076 25.3119 15.9702 25.268 15.8598 25.268H9.3108ZM21.1845 18.3012C21.2015 18.2566 21.2101 18.2092 21.2098 18.1615C21.2098 18.0511 21.166 17.9453 21.0879 17.8673C21.0099 17.7893 20.9041 17.7455 20.7938 17.7455H9.3108C9.25587 17.7448 9.20136 17.7551 9.15043 17.7756C9.09949 17.7962 9.05314 17.8267 9.01407 17.8653C8.975 17.9039 8.94398 17.9499 8.92281 18.0006C8.90163 18.0513 8.89073 18.1056 8.89073 18.1606C8.89073 18.2155 8.90163 18.2699 8.92281 18.3206C8.94398 18.3713 8.975 18.4172 9.01407 18.4559C9.05314 18.4945 9.09949 18.5249 9.15043 18.5455C9.20136 18.5661 9.25587 18.5763 9.3108 18.5757H20.4891C20.7157 18.4714 20.9479 18.3798 21.1846 18.3014L21.1845 18.3012ZM20.794 10.4507H16.7171C16.6067 10.4507 16.5009 10.4946 16.4229 10.5726C16.3449 10.6506 16.301 10.7564 16.301 10.8667C16.301 10.9771 16.3449 11.0829 16.4229 11.1609C16.5009 11.2389 16.6067 11.2828 16.7171 11.2828H20.794C20.9043 11.2828 21.0102 11.2389 21.0882 11.1609C21.1662 11.0829 21.21 10.9771 21.21 10.8667C21.21 10.7564 21.1662 10.6506 21.0882 10.5726C21.0102 10.4946 20.9043 10.4507 20.794 10.4507ZM20.794 12.3316H16.7171C16.6067 12.3316 16.5009 12.3754 16.4229 12.4534C16.3449 12.5314 16.301 12.6373 16.301 12.7476C16.301 12.8579 16.3449 12.9637 16.4229 13.0418C16.5009 13.1198 16.6067 13.1636 16.7171 13.1636H20.794C20.9043 13.1636 21.0102 13.1198 21.0882 13.0418C21.1662 12.9637 21.21 12.8579 21.21 12.7476C21.21 12.6373 21.1662 12.5314 21.0882 12.4534C21.0102 12.3754 20.9043 12.3316 20.794 12.3316ZM20.794 8.56986H16.7171C16.6067 8.56986 16.5009 8.61369 16.4229 8.69171C16.3449 8.76973 16.301 8.87555 16.301 8.98588C16.301 9.09621 16.3449 9.20203 16.4229 9.28005C16.5009 9.35807 16.6067 9.4019 16.7171 9.4019H20.794C20.9043 9.4019 21.0102 9.35807 21.0882 9.28005C21.1662 9.20203 21.21 9.09621 21.21 8.98588C21.21 8.87555 21.1662 8.76973 21.0882 8.69171C21.0102 8.61369 20.9043 8.56986 20.794 8.56986ZM28.7827 24.4078C28.7827 25.5138 28.4547 26.5951 27.8402 27.5148C27.2257 28.4344 26.3523 29.1513 25.3304 29.5745C24.3085 29.9978 23.1841 30.1086 22.0992 29.8928C21.0144 29.677 20.0179 29.1444 19.2358 28.3622C18.4537 27.5801 17.921 26.5836 17.7052 25.4988C17.4894 24.414 17.6002 23.2895 18.0235 22.2676C18.4468 21.2457 19.1636 20.3723 20.0832 19.7578C21.0029 19.1433 22.0842 18.8153 23.1903 18.8153C24.6725 18.8182 26.0933 19.4083 27.1414 20.4564C28.1896 21.5045 28.7797 22.9252 28.7827 24.4075V24.4078ZM27.1611 24.4078C27.1611 23.6224 26.9282 22.8547 26.4919 22.2017C26.0556 21.5487 25.4354 21.0397 24.7098 20.7392C23.9843 20.4386 23.1859 20.36 22.4156 20.5132C21.6453 20.6664 20.9378 21.0446 20.3824 21.5999C19.8271 22.1553 19.4489 22.8628 19.2957 23.6331C19.1425 24.4033 19.2211 25.2018 19.5217 25.9273C19.8222 26.6529 20.3312 27.2731 20.9842 27.7094C21.6372 28.1457 22.4049 28.3786 23.1903 28.3786C24.2428 28.3767 25.2518 27.9577 25.9961 27.2134C26.7403 26.4691 27.1593 25.4601 27.1611 24.4075V24.4078ZM23.1903 23.9917C23.1183 23.992 23.0471 23.9779 22.9806 23.9505C22.9141 23.923 22.8537 23.8826 22.8029 23.8317C22.7005 23.7292 22.643 23.5902 22.643 23.4453C22.643 23.3003 22.7005 23.1613 22.8029 23.0588C22.8682 22.9936 22.9489 22.9459 23.0375 22.9202C23.1261 22.8945 23.2198 22.8916 23.3098 22.9117C23.3998 22.9319 23.4833 22.9745 23.5525 23.0355C23.6217 23.0965 23.6744 23.174 23.7056 23.2608C23.7237 23.3126 23.7519 23.3602 23.7885 23.401C23.8251 23.4417 23.8693 23.4749 23.9188 23.4985C23.9682 23.5221 24.0219 23.5357 24.0766 23.5385C24.1313 23.5413 24.1861 23.5333 24.2377 23.5149C24.2893 23.4965 24.3367 23.468 24.3773 23.4312C24.4179 23.3944 24.4508 23.3499 24.4741 23.3003C24.4974 23.2507 24.5107 23.197 24.5132 23.1423C24.5157 23.0875 24.5074 23.0328 24.4886 22.9813C24.3924 22.713 24.2153 22.4812 23.9817 22.3178C23.8665 22.2373 23.7399 22.1743 23.6062 22.1309V21.7553C23.6062 21.7006 23.5954 21.6465 23.5745 21.5961C23.5536 21.5456 23.523 21.4997 23.4844 21.4611C23.4457 21.4225 23.3999 21.3918 23.3494 21.3709C23.2989 21.35 23.2448 21.3393 23.1902 21.3393C23.1356 21.3393 23.0815 21.35 23.031 21.3709C22.9805 21.3918 22.9347 21.4225 22.896 21.4611C22.8574 21.4997 22.8268 21.5456 22.8058 21.5961C22.7849 21.6465 22.7742 21.7006 22.7742 21.7553V22.1309C22.4604 22.2302 22.1925 22.4385 22.019 22.7181C21.8454 22.9978 21.7776 23.3303 21.8279 23.6555C21.8781 23.9808 22.0431 24.2773 22.293 24.4916C22.5428 24.7058 22.8611 24.8235 23.1902 24.8235C23.276 24.8237 23.3606 24.844 23.4371 24.8829C23.5137 24.9218 23.5799 24.9782 23.6306 25.0475C23.6812 25.1168 23.7149 25.197 23.7287 25.2817C23.7426 25.3665 23.7363 25.4532 23.7104 25.5351C23.6844 25.6169 23.6396 25.6915 23.5795 25.7527C23.5193 25.814 23.4456 25.8602 23.3643 25.8877C23.283 25.9152 23.1963 25.9231 23.1114 25.9108C23.0264 25.8986 22.9455 25.8665 22.8753 25.8171C22.7831 25.7523 22.7131 25.6605 22.6749 25.5544C22.6581 25.501 22.6307 25.4516 22.5943 25.4091C22.558 25.3666 22.5134 25.3319 22.4633 25.307C22.4132 25.2821 22.3586 25.2675 22.3028 25.2642C22.2469 25.2609 22.191 25.2689 22.1383 25.2877C22.0856 25.3065 22.0373 25.3358 21.9961 25.3737C21.955 25.4116 21.922 25.4574 21.899 25.5084C21.876 25.5594 21.8635 25.6145 21.8623 25.6705C21.861 25.7264 21.8711 25.782 21.8919 25.8339C21.988 26.1018 22.1645 26.3334 22.3971 26.4974C22.5129 26.5779 22.64 26.6409 22.7743 26.6843V27.0582C22.7743 27.1685 22.8181 27.2743 22.8961 27.3524C22.9742 27.4304 23.08 27.4742 23.1903 27.4742C23.3006 27.4742 23.4065 27.4304 23.4845 27.3524C23.5625 27.2743 23.6063 27.1685 23.6063 27.0582V26.6843C23.9201 26.585 24.188 26.3767 24.3616 26.0971C24.5352 25.8174 24.603 25.4849 24.5527 25.1596C24.5025 24.8344 24.3375 24.5378 24.0876 24.3236C23.8377 24.1094 23.5194 23.9916 23.1903 23.9917L23.1903 23.9917ZM3.83633 21.922H7.69766V25.7833H3.83633V21.922ZM4.62441 24.256L5.11783 24.7477C5.15629 24.7865 5.20206 24.8174 5.25249 24.8384C5.30293 24.8594 5.35703 24.8702 5.41168 24.8702C5.46633 24.8702 5.52043 24.8594 5.57087 24.8384C5.6213 24.8174 5.66707 24.7865 5.70553 24.7477L6.90793 23.5454C6.98563 23.4674 7.02922 23.3617 7.02912 23.2517C7.02902 23.1416 6.98524 23.036 6.90739 22.9582C6.82954 22.8803 6.72399 22.8365 6.6139 22.8364C6.5038 22.8363 6.39817 22.8799 6.32018 22.9576L5.41256 23.867L5.21381 23.6683C5.13588 23.5901 5.03009 23.5461 4.91971 23.546C4.80934 23.5458 4.70342 23.5895 4.62526 23.6675C4.54711 23.7454 4.50311 23.8512 4.50295 23.9615C4.50279 24.0719 4.54648 24.1778 4.62441 24.256Z"
                  fill="#FDFDFD"
                />
              </g>
              <defs>
                <clipPath id="clip0_1632_315">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Financial Planning"
          description="We offer practical advice on budgeting, managing expenses, and setting up a bank account in your host country."
        />
        <ServicesIncludedCard
          icon={
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1632_5761)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.6562 0H24.5312V4.21875H28.7499V9.09375H24.5312V13.3125H19.6562V9.09375H15.4374V4.21875H19.6562V0ZM20.3729 22.1132C17.7026 24.7992 5.20076 12.2974 7.88682 9.62713C8.64027 8.87807 9.91533 7.71176 10.6958 6.99439C11.4763 6.27703 6.24326 -1.4451 4.73477 0.239941L1.19459 4.19438C-5.56789 11.7484 18.2516 35.5679 25.8056 28.8054L29.7602 25.2653C31.4453 23.7567 23.7231 18.5238 23.0057 19.3042C22.2883 20.0847 21.1219 21.3598 20.3729 22.1132Z"
                  fill="#FDFDFD"
                />
              </g>
              <defs>
                <clipPath id="clip0_1632_5761">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Emergency Preparedness"
          description="Equip yourself with strategies to handle unexpected situations, giving you peace of mind during your adventure."
        />
      </div>
    </Section>
  );
};

export default LivingCosts;