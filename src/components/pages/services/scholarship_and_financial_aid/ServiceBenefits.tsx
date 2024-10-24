import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import SectionName from "@/components/ui/SectionName";

const ServiceBenefits = () => {
  return (
    <section>
      <div className="bg-service-benefits-bg bg-cover bg-center bg-no-repeat py-[50px] text-white">
        <FadeInDownWithSlowBounce>
          <SectionName name="Service Benefits" position="center" />
        </FadeInDownWithSlowBounce>

        <FadeInDownWithSlowBounce>
          <h2 className="mx-auto mb-10 mt-5 text-center text-3xl font-semibold text-white lg:text-4xl">
            Scholarship & Financial Aid Service Benefits
          </h2>
        </FadeInDownWithSlowBounce>

        <FadeInRightWithSlowBounce className="container grid basis-full grid-cols-1 gap-10 md:grid-cols-2 lg:basis-2/3 lg:gap-x-20 xl:grid-cols-3">
          <div className="flex justify-start gap-4">
            <div className="basis-8">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="4" fill="#F37329" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.1305 25.4233C22.3727 22.1812 27.6262 22.1812 30.8666 25.4233C34.1087 28.6637 34.1087 33.9173 30.8666 37.1594C27.6245 40.4015 22.3727 40.3998 19.1305 37.1594C15.8901 33.9173 15.8901 28.6637 19.1305 25.4233ZM20.0839 26.3767C22.7995 23.6611 27.1993 23.6611 29.915 26.3767C32.6306 29.0922 32.6289 33.4921 29.915 36.206C27.1994 38.9199 22.7996 38.9199 20.0839 36.206C17.37 33.4921 17.37 29.0906 20.0839 26.3767Z"
                  fill="#FDFDFD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.5821 26.8731C23.022 24.4332 26.9766 24.4332 29.4166 26.8731C31.3814 28.838 31.7634 31.7845 30.5642 34.1314C30.1889 32.7827 29.0129 31.9008 27.6742 31.4374C28.0911 30.8793 28.3386 30.1884 28.3386 29.4393C28.3386 27.5956 26.8438 26.0991 24.9985 26.0991C23.1532 26.0991 21.66 27.5956 21.66 29.4393C21.66 30.1883 21.9075 30.8793 22.3244 31.4374C20.9873 31.8991 19.8097 32.781 19.4327 34.1314C18.2352 31.7845 18.6172 28.838 20.5821 26.8731Z"
                  fill="#FDFDFD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.0137 34.9587C20.0685 33.4423 21.291 32.4573 22.8605 32.0039C24.0979 33.037 25.8984 33.037 27.1374 32.0039C28.7069 32.4574 29.9294 33.4423 29.9842 34.9587V35.0567C29.8104 35.2868 29.6206 35.5044 29.4162 35.7078C26.9763 38.1477 23.0216 38.1477 20.5817 35.7078C20.3773 35.5044 20.1875 35.2868 20.0137 35.0567V34.9587Z"
                  fill="#FDFDFD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.9982 26.8035C26.4548 26.8035 27.6357 27.9827 27.6357 29.4394C27.6357 30.896 26.4548 32.0753 24.9982 32.0753C23.5416 32.0753 22.3623 30.8944 22.3623 29.4394C22.3623 27.9844 23.5432 26.8035 24.9982 26.8035Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M34.4177 14.4096C34.627 14.5425 34.6453 14.8531 34.4177 15.0042L32.8681 16.0838C32.7086 16.195 32.4894 16.1552 32.3797 15.9958C32.2685 15.8363 32.3083 15.6187 32.4677 15.5074L33.1105 15.059H29.7704C29.3169 15.059 28.9449 15.4293 28.9449 15.8844V20.4138C28.9449 20.6081 28.7888 20.7659 28.5945 20.7659C28.4002 20.7659 28.2423 20.6081 28.2423 20.4138V15.8845C28.2423 15.0424 28.9283 14.3564 29.7704 14.3564H33.1105L32.4677 13.9079C32.3083 13.7967 32.2685 13.5774 32.3797 13.418C32.4894 13.2586 32.7086 13.2203 32.8681 13.33L34.4177 14.4096ZM25.3507 11.88V20.4138C25.3507 20.5072 25.3135 20.5968 25.2475 20.6628C25.1815 20.7288 25.0919 20.7659 24.9986 20.766C24.8059 20.766 24.6481 20.6082 24.6481 20.4138V11.88L24.1996 12.5228C24.0884 12.6822 23.8691 12.7221 23.7113 12.6108C23.5519 12.5012 23.512 12.2819 23.6233 12.1225L24.7062 10.5662C24.8441 10.3652 25.1431 10.3536 25.2875 10.5612L26.3755 12.1225C26.4867 12.2819 26.4469 12.5012 26.2874 12.6108C26.1297 12.7221 25.9104 12.6822 25.7991 12.5228L25.3507 11.88ZM17.5311 15.5074C17.6905 15.6187 17.7304 15.8363 17.6191 15.9958C17.5095 16.1552 17.2902 16.1951 17.1308 16.0838L15.5811 15.0042C15.3636 14.8597 15.3636 14.5557 15.5811 14.4096L17.1308 13.33C17.2902 13.2203 17.5095 13.2586 17.6191 13.418C17.7304 13.5774 17.6905 13.7967 17.5311 13.9079L16.8883 14.3564H20.2284C21.0706 14.3564 21.7565 15.0424 21.7565 15.8845V20.4138C21.7565 20.6082 21.5987 20.766 21.4044 20.766C21.21 20.766 21.0539 20.6082 21.0539 20.4138V15.8845C21.0539 15.4294 20.6818 15.059 20.2284 15.059H16.8883L17.5311 15.5075V15.5074Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="basis-full space-y-3">
              <h6 className="text-2xl font-medium">Personalized Guidance</h6>
              <p className="text-sm">
                Receive tailored support to find scholarships that align with
                your academic profile and financial needs for studying abroad.
              </p>
            </div>
          </div>

          <div className="flex justify-start gap-4">
            <div className="basis-8">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="4" fill="#F37329" />
                <path
                  d="M17.4468 31.9258H13.105V37.4922H17.4468V31.9258ZM20.5933 31.1758H18.6128C18.232 31.1758 17.9156 31.4922 17.9156 31.8672V37.4805C17.9156 37.8614 18.232 38.1719 18.6128 38.1719H20.5933C20.9742 38.1719 21.2847 37.8614 21.2847 37.4805V31.8672C21.2906 31.4922 20.98 31.1758 20.5933 31.1758ZM21.7593 32.1251V37.5333L22.8023 37.9961L28.0289 37.9844C28.4273 37.9844 28.7789 37.9083 29.1187 37.6973L34.5796 34.3282C35.7398 33.6133 34.896 32.6934 34.1636 33.0157L28.9312 35.3301C28.9019 35.3477 28.8609 35.3594 28.8257 35.3594H24.8238C24.5132 35.3594 24.5132 34.8907 24.8238 34.8907H28.7789C28.9195 34.8204 29.0425 34.709 29.1304 34.5801C29.5171 33.9942 29.0894 33.2032 28.3863 33.2032H25.3804C25.275 33.2032 25.1812 33.1329 25.1519 33.0215C25.023 32.4883 24.4898 32.1251 23.9566 32.1251H21.7593ZM25.9781 17.4415C25.6734 17.4004 25.732 16.9376 26.0367 16.9786C30.5835 17.5704 33.7945 21.7422 33.1968 26.295C32.8921 28.6504 31.6031 30.7247 29.6812 32.0547C29.5757 32.1251 29.4293 32.1016 29.3531 31.9961C29.2828 31.8907 29.3062 31.7442 29.4117 31.668C33.0914 29.1251 33.9117 24.004 31.1695 20.4356C29.9566 18.8477 28.1285 17.7227 25.9781 17.4415ZM19.5562 18.9063C18.9585 17.9571 19.2574 16.586 20.2125 16.0001C20.3121 15.9356 20.4468 15.9649 20.5171 16.0528C20.9449 16.5918 21.0445 17.3477 20.8218 18.004C20.8921 17.9629 20.9683 17.9219 21.0445 17.8809C21.3433 16.6211 22.7613 15.7833 24.0093 16.1524C24.1265 16.1876 24.191 16.3047 24.1734 16.4161C24.0035 17.4063 23.1304 18.1797 22.146 18.3262C21.8472 18.3731 21.5484 18.3555 21.2671 18.2852C20.1832 18.8653 19.2457 19.6915 18.5367 20.7051C16.6675 23.3711 16.65 26.9278 18.4781 29.6172C18.6539 29.8692 18.2671 30.1329 18.0914 29.8809C15.7066 26.3946 16.3394 21.6602 19.5562 18.9063ZM29.0718 21.1622C26.8218 18.9122 23.1773 18.9122 20.9273 21.1622C18.6773 23.4122 18.6773 27.0567 20.9273 29.3067C23.1773 31.5567 26.8218 31.5567 29.0718 29.3067C31.3218 27.0567 31.3218 23.4122 29.0718 21.1622ZM27.7476 22.4864C26.23 20.9688 23.7691 20.9688 22.2574 22.4864C20.7398 24.004 20.7398 26.4649 22.2574 27.9766C23.775 29.4883 26.2359 29.4942 27.7476 27.9766C29.2593 26.459 29.2652 24.004 27.7476 22.4864ZM24.9996 20.8809C27.4019 20.8809 29.3531 22.8321 29.3531 25.2344C29.3531 27.6368 27.4019 29.5879 24.9996 29.5879C22.5972 29.5879 20.646 27.6368 20.646 25.2344C20.646 22.8321 22.5972 20.8809 24.9996 20.8809ZM23.7867 26.1251C23.7574 25.8204 24.2261 25.7735 24.2496 26.084C24.2964 26.5645 25.0875 26.8047 25.5503 26.4297C25.6734 26.3243 25.7554 26.1895 25.7554 26.043C25.7554 25.0938 23.7867 25.8907 23.7867 24.4317C23.7867 23.8926 24.2437 23.5001 24.7652 23.4122V23.0899C24.7652 22.961 24.8707 22.8555 25.0113 22.8555C25.1402 22.8555 25.2457 22.961 25.2457 23.0958L25.2398 23.4122C25.7671 23.5001 26.23 23.8926 26.23 24.4317C26.23 24.7422 25.7613 24.7422 25.7613 24.4317C25.7613 23.9278 24.9351 23.6583 24.4605 24.045C24.3375 24.1446 24.2554 24.2852 24.2554 24.4317C24.2554 25.3809 26.2242 24.584 26.2242 26.043C26.2242 26.5821 25.7613 26.9747 25.2398 27.0626L25.2339 27.3848C25.2339 27.6895 24.7652 27.6895 24.7652 27.3848V27.0626C24.2671 26.9805 23.8335 26.629 23.7867 26.1251ZM24.5484 12.9942C24.4664 13.0938 24.3199 13.1114 24.2203 13.0352C24.1207 12.9532 24.1031 12.8067 24.1793 12.7071L24.8121 11.9043C24.9058 11.7813 25.0875 11.7872 25.1812 11.9102L25.814 12.7071C25.896 12.8067 25.8726 12.9532 25.773 13.0352C25.6734 13.1172 25.521 13.0938 25.4449 12.9942L25.2281 12.7247V14.8282C25.2281 15.1387 24.7593 15.1387 24.7593 14.8282V12.7247L24.5484 12.9942ZM33.3375 16.2637C33.0328 16.2989 32.9742 15.836 33.2847 15.8008L34.2984 15.6836C34.4507 15.6661 34.5738 15.8008 34.5562 15.9473L34.439 16.9551C34.4039 17.2598 33.9351 17.2071 33.9761 16.9024L34.0171 16.5567L32.5289 18.045C32.3121 18.2618 31.9781 17.9336 32.1949 17.7168L33.6832 16.2286L33.3375 16.2637ZM37.2398 24.7833C37.1402 24.7012 37.1226 24.5547 37.1988 24.4551C37.2808 24.3555 37.4273 24.3379 37.5269 24.4141L38.3296 25.0469C38.4527 25.1407 38.4468 25.3223 38.3238 25.4161L37.5269 26.043C37.4273 26.1251 37.2808 26.1075 37.1988 26.002C37.1168 25.9024 37.1343 25.7559 37.2398 25.6739L37.5093 25.4571H35.4058C35.0953 25.4571 35.0953 24.9883 35.4058 24.9883H37.5093L37.2398 24.7833ZM12.7593 25.6856C12.8589 25.7676 12.8765 25.9141 12.8003 26.0137C12.7183 26.1133 12.5718 26.1309 12.4722 26.0547L11.6695 25.4219C11.5464 25.3282 11.5523 25.1465 11.6753 25.0528L12.4722 24.42C12.5718 24.3379 12.7183 24.3614 12.8003 24.461C12.8824 24.5606 12.8648 24.7071 12.7593 24.7891L12.4898 25.0059H14.5933C14.9039 25.0059 14.9039 25.4747 14.5933 25.4747H12.4898L12.7593 25.6856ZM16.0289 16.9024C16.064 17.2071 15.6011 17.2657 15.566 16.9551L15.4488 15.9415C15.4312 15.7891 15.566 15.6661 15.7125 15.6836L16.7203 15.8008C17.025 15.836 16.9722 16.2989 16.6675 16.2637L16.3218 16.2227L17.8101 17.711C18.0269 17.9278 17.6988 18.2618 17.4761 18.0391L15.9878 16.5508L16.0289 16.9024Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="basis-full space-y-3">
              <h6 className="text-2xl font-medium">
                Increased Funding Opportunities
              </h6>
              <p className="text-sm">
                Access a comprehensive database of scholarships and grants from
                various institutions worldwide, maximizing your chances of
                securing funding.
              </p>
            </div>
          </div>

          <div className="flex justify-start gap-4">
            <div className="basis-8">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="4" fill="#F37329" />
                <path
                  d="M20.1438 19.9188C19.7839 19.5734 19.5356 19.1282 19.4308 18.6405C19.326 18.1528 19.3695 17.645 19.5556 17.1822C19.7418 16.7194 20.0621 16.3229 20.4755 16.0437C20.8888 15.7645 21.3762 15.6152 21.875 15.6152C22.3738 15.6152 22.8612 15.7645 23.2745 16.0437C23.6879 16.3229 24.0082 16.7194 24.1944 17.1822C24.3805 17.645 24.424 18.1528 24.3192 18.6405C24.2144 19.1282 23.9661 19.5734 23.6063 19.9188C24.2483 20.3515 24.8037 20.9005 25.2438 21.5375C25.7737 20.898 26.1106 20.1209 26.2152 19.297C26.3198 18.4732 26.1877 17.6365 25.8344 16.8849C25.4811 16.1333 24.9211 15.4978 24.22 15.0526C23.5189 14.6075 22.7055 14.3711 21.875 14.3711C21.0445 14.3711 20.2311 14.6075 19.53 15.0526C18.8289 15.4978 18.2689 16.1333 17.9156 16.8849C17.5623 17.6365 17.4302 18.4732 17.5348 19.297C17.6394 20.1209 17.9764 20.898 18.5063 21.5375C18.9463 20.9005 19.5017 20.3515 20.1438 19.9188Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M21.875 19.375C22.5654 19.375 23.125 18.8154 23.125 18.125C23.125 17.4346 22.5654 16.875 21.875 16.875C21.1846 16.875 20.625 17.4346 20.625 18.125C20.625 18.8154 21.1846 19.375 21.875 19.375Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M31.875 11.25V15H35.625L31.875 11.25ZM19.4375 22.3812C20.1584 22.8649 21.0069 23.1232 21.875 23.1232C22.7431 23.1232 23.5916 22.8649 24.3125 22.3812C22.7125 20.0562 21.0375 20.0562 19.4375 22.3812Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M31.25 16.25C31.0842 16.25 30.9253 16.1842 30.8081 16.0669C30.6908 15.9497 30.625 15.7908 30.625 15.625V10.625H13.75V39.375H36.25V16.25H31.25ZM21.875 13.125C22.9875 13.125 24.0751 13.4549 25.0001 14.073C25.9251 14.6911 26.6461 15.5696 27.0718 16.5974C27.4976 17.6252 27.609 18.7562 27.3919 19.8474C27.1749 20.9385 26.6391 21.9408 25.8525 22.7275C25.0658 23.5141 24.0635 24.0499 22.9724 24.2669C21.8812 24.484 20.7502 24.3726 19.7224 23.9468C18.6946 23.5211 17.8161 22.8001 17.198 21.8751C16.5799 20.9501 16.25 19.8625 16.25 18.75C16.25 17.2582 16.8426 15.8274 17.8975 14.7725C18.9524 13.7176 20.3832 13.125 21.875 13.125ZM29.375 36.875H16.875C16.7092 36.875 16.5503 36.8092 16.4331 36.6919C16.3158 36.5747 16.25 36.4158 16.25 36.25C16.25 36.0842 16.3158 35.9253 16.4331 35.8081C16.5503 35.6908 16.7092 35.625 16.875 35.625H29.375C29.5408 35.625 29.6997 35.6908 29.8169 35.8081C29.9342 35.9253 30 36.0842 30 36.25C30 36.4158 29.9342 36.5747 29.8169 36.6919C29.6997 36.8092 29.5408 36.875 29.375 36.875ZM33.125 33.75H16.875C16.7092 33.75 16.5503 33.6842 16.4331 33.5669C16.3158 33.4497 16.25 33.2908 16.25 33.125C16.25 32.9592 16.3158 32.8003 16.4331 32.6831C16.5503 32.5658 16.7092 32.5 16.875 32.5H33.125C33.2908 32.5 33.4497 32.5658 33.5669 32.6831C33.6842 32.8003 33.75 32.9592 33.75 33.125C33.75 33.2908 33.6842 33.4497 33.5669 33.5669C33.4497 33.6842 33.2908 33.75 33.125 33.75ZM33.125 30.625H16.875C16.7092 30.625 16.5503 30.5592 16.4331 30.4419C16.3158 30.3247 16.25 30.1658 16.25 30C16.25 29.8342 16.3158 29.6753 16.4331 29.5581C16.5503 29.4408 16.7092 29.375 16.875 29.375H33.125C33.2908 29.375 33.4497 29.4408 33.5669 29.5581C33.6842 29.6753 33.75 29.8342 33.75 30C33.75 30.1658 33.6842 30.3247 33.5669 30.4419C33.4497 30.5592 33.2908 30.625 33.125 30.625ZM33.125 27.5H16.875C16.7092 27.5 16.5503 27.4342 16.4331 27.3169C16.3158 27.1997 16.25 27.0408 16.25 26.875C16.25 26.7092 16.3158 26.5503 16.4331 26.4331C16.5503 26.3158 16.7092 26.25 16.875 26.25H33.125C33.2908 26.25 33.4497 26.3158 33.5669 26.4331C33.6842 26.5503 33.75 26.7092 33.75 26.875C33.75 27.0408 33.6842 27.1997 33.5669 27.3169C33.4497 27.4342 33.2908 27.5 33.125 27.5ZM33.125 23.75H29.375C29.2092 23.75 29.0503 23.6842 28.9331 23.5669C28.8158 23.4497 28.75 23.2908 28.75 23.125C28.75 22.9592 28.8158 22.8003 28.9331 22.6831C29.0503 22.5658 29.2092 22.5 29.375 22.5H33.125C33.2908 22.5 33.4497 22.5658 33.5669 22.6831C33.6842 22.8003 33.75 22.9592 33.75 23.125C33.75 23.2908 33.6842 23.4497 33.5669 23.5669C33.4497 23.6842 33.2908 23.75 33.125 23.75ZM33.125 20.625H29.375C29.2092 20.625 29.0503 20.5592 28.9331 20.4419C28.8158 20.3247 28.75 20.1658 28.75 20C28.75 19.8342 28.8158 19.6753 28.9331 19.5581C29.0503 19.4408 29.2092 19.375 29.375 19.375H33.125C33.2908 19.375 33.4497 19.4408 33.5669 19.5581C33.6842 19.6753 33.75 19.8342 33.75 20C33.75 20.1658 33.6842 20.3247 33.5669 20.4419C33.4497 20.5592 33.2908 20.625 33.125 20.625Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="basis-full space-y-3">
              <h6 className="text-2xl font-medium">
                Expert Application Assistance
              </h6>
              <p className="text-sm">
                Get professional help crafting compelling scholarship
                applications, including essays and documentation, to enhance
                your submission&apos;s impact.
              </p>
            </div>
          </div>

          <div className="flex justify-start gap-4">
            <div className="basis-8">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="4" fill="#F37329" />
                <g clipPath="url(#clip0_1276_13997)">
                  <path
                    d="M19.4639 21.0758H22.4019V28.12H19.4639V21.0758ZM25.3299 28.12H28.2679V18.1523H25.3299V28.12ZM31.196 28.12H34.134V15.3018H31.196V28.12ZM37.062 28.12H40V12.5245H37.062V28.12ZM32.9379 33.0348L31.9445 30.5475C31.9308 30.5132 31.9252 30.4762 31.928 30.4393C31.9308 30.4025 31.942 30.3668 31.9608 30.335C32.0074 30.2557 32.053 30.1757 32.0974 30.0951H29.0822C27.5488 31.9617 25.2938 33.0296 22.8763 33.0296C18.4487 33.0296 14.8465 29.4275 14.8465 24.9999C14.8465 22.8752 15.6684 20.8723 17.1609 19.3603C18.6344 17.8674 20.5945 17.0213 22.6873 16.973L25.7421 14.8597C25.6702 14.8393 25.5985 14.8198 25.5273 14.8013C25.4917 14.792 25.4586 14.7747 25.4306 14.7507C25.4026 14.7266 25.3806 14.6965 25.366 14.6626L24.3099 12.2032C23.834 12.1503 23.3555 12.1236 22.8766 12.1233C22.4034 12.1233 21.9217 12.1501 21.4429 12.2031L20.3869 14.6626C20.3723 14.6965 20.3502 14.7267 20.3223 14.7507C20.2943 14.7747 20.2612 14.792 20.2255 14.8013C19.2836 15.0466 18.3803 15.4214 17.5414 15.9151C17.5096 15.9338 17.4739 15.945 17.4371 15.9478C17.4003 15.9506 17.3634 15.9449 17.3291 15.9312L14.8414 14.9381C14.0928 15.5367 13.413 16.2165 12.8144 16.9651L13.8075 19.4523C13.8212 19.4866 13.8269 19.5235 13.8241 19.5604C13.8213 19.5972 13.8101 19.6328 13.7914 19.6647C13.2979 20.5036 12.9232 21.407 12.6783 22.349C12.669 22.3847 12.6517 22.4179 12.6276 22.4459C12.6036 22.4739 12.5734 22.496 12.5395 22.5106L10.0796 23.5665C10.0267 24.0426 10.0002 24.5213 10 25.0003C10 25.4756 10.0268 25.9571 10.0796 26.4333L12.5393 27.4893C12.5733 27.5038 12.6034 27.526 12.6274 27.554C12.6515 27.582 12.6688 27.6151 12.6781 27.6509C12.923 28.5929 13.2977 29.4963 13.7913 30.3352C13.81 30.367 13.8211 30.4027 13.8239 30.4395C13.8267 30.4763 13.821 30.5132 13.8074 30.5475L12.8142 33.0348C13.4128 33.7835 14.0926 34.4633 14.8412 35.0619L17.3289 34.0687C17.3632 34.055 17.4001 34.0494 17.4369 34.0521C17.4737 34.0549 17.5094 34.0661 17.5412 34.0848C18.3798 34.5785 19.2831 34.9531 20.2251 35.1975C20.2608 35.2068 20.294 35.2241 20.322 35.2481C20.35 35.2722 20.3721 35.3023 20.3867 35.3363L21.4428 37.7968C21.9188 37.8496 22.3975 37.8763 22.8764 37.8766C23.3489 37.8766 23.8305 37.8498 24.3098 37.7967L25.3659 35.3363C25.3804 35.3023 25.4025 35.2722 25.4306 35.2481C25.4586 35.2241 25.4917 35.2068 25.5275 35.1975C26.4694 34.953 27.3727 34.5785 28.2113 34.0848C28.2432 34.0661 28.2789 34.0549 28.3157 34.0521C28.3525 34.0494 28.3894 34.055 28.4237 34.0687L30.9108 35.0619C31.6595 34.4634 32.3394 33.7835 32.9379 33.0348Z"
                    fill="#FDFDFD"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1276_13997">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(10 10)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="basis-full space-y-3">
              <h6 className="text-2xl font-medium">Streamlined Process</h6>
              <p className="text-sm">
                Enjoy a hassle-free experience with organized tracking and
                management of scholarship applications, ensuring you stay on top
                of deadlines.
              </p>
            </div>
          </div>

          <div className="flex justify-start gap-4">
            <div className="basis-8">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="4" fill="#F37329" />
                <path
                  d="M36.25 11.875H22.6562C22.1665 11.8678 21.694 12.0553 21.3424 12.3964C20.9909 12.7374 20.789 13.204 20.7812 13.6937V18.4375H22.1406C22.7495 18.4384 23.3331 18.6808 23.7637 19.1113C24.1942 19.5418 24.4365 20.1255 24.4375 20.7343V20.8328C24.4891 20.8515 24.5406 20.875 24.5922 20.8937C24.8035 20.6678 25.0578 20.4864 25.3402 20.3603C25.6227 20.2341 25.9275 20.1658 26.2367 20.1592C26.546 20.1527 26.8534 20.2081 27.141 20.3221C27.4285 20.4362 27.6903 20.6066 27.9109 20.8234C28.6127 21.5917 29.8502 22.4293 29.8375 23.6078H33.7187L35.7344 25.539C36.5519 26.3935 38.1653 25.764 38.125 24.5687V13.6937C38.1172 13.204 37.9154 12.7374 37.5638 12.3964C37.2123 12.0553 36.7397 11.8678 36.25 11.875ZM29.4531 20.7812C29.3437 20.7812 29.2388 20.7377 29.1614 20.6604C29.0841 20.583 29.0406 20.4781 29.0406 20.3687C29.0406 20.2593 29.0841 20.1544 29.1614 20.077C29.2388 19.9997 29.3437 19.9562 29.4531 19.9562C29.5625 19.9562 29.6674 19.9997 29.7448 20.077C29.8222 20.1544 29.8656 20.2593 29.8656 20.3687C29.8656 20.4781 29.8222 20.583 29.7448 20.6604C29.6674 20.7377 29.5625 20.7812 29.4531 20.7812ZM30.5312 17.2281C30.3483 17.3339 30.1959 17.4855 30.0891 17.6679C29.9823 17.8503 29.9246 18.0573 29.9219 18.2687V18.714C29.9219 18.8383 29.8725 18.9576 29.7846 19.0455C29.6967 19.1334 29.5774 19.1828 29.4531 19.1828C29.3288 19.1828 29.2096 19.1334 29.1217 19.0455C29.0338 18.9576 28.9844 18.8383 28.9844 18.714V18.2687C28.9858 17.8955 29.0847 17.5292 29.2714 17.2061C29.458 16.8829 29.7259 16.6142 30.0484 16.4265C30.2671 16.2916 30.4364 16.0896 30.5311 15.8507C30.6257 15.6119 30.6407 15.3488 30.5738 15.1007C30.5069 14.8526 30.3617 14.6327 30.1598 14.4738C29.9578 14.3149 29.71 14.2254 29.4531 14.2187C29.2983 14.2196 29.1451 14.2509 29.0024 14.311C28.8597 14.3711 28.7303 14.4587 28.6214 14.5688C28.5126 14.679 28.4265 14.8095 28.3682 14.9529C28.3098 15.0963 28.2803 15.2498 28.2812 15.4046C28.2812 15.529 28.2319 15.6482 28.144 15.7361C28.056 15.824 27.9368 15.8734 27.8125 15.8734C27.6882 15.8734 27.569 15.824 27.481 15.7361C27.3931 15.6482 27.3438 15.529 27.3438 15.4046C27.3428 15.0331 27.4397 14.6678 27.6245 14.3455C27.8094 14.0232 28.0758 13.7552 28.397 13.5684C28.7182 13.3816 29.0828 13.2825 29.4544 13.2812C29.826 13.2798 30.1913 13.3763 30.5139 13.5608C30.8364 13.7453 31.1047 14.0114 31.2919 14.3323C31.4791 14.6533 31.5785 15.0178 31.5803 15.3894C31.582 15.761 31.486 16.1264 31.3019 16.4492C31.1178 16.7719 30.852 17.0405 30.5312 17.2281Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M29.2656 26.5C28.975 26.4916 28.5236 26.5806 28.4125 26.2187C28.3694 25.8831 27.8467 25.3544 28.1875 25L28.5109 24.6766C28.6415 24.5417 28.7433 24.3818 28.8103 24.2064C28.8773 24.0311 28.9079 23.8439 28.9005 23.6564C28.893 23.4688 28.8476 23.2847 28.767 23.1152C28.6863 22.9458 28.5721 22.7944 28.4312 22.6703L27.25 21.4891C26.994 21.2346 26.6477 21.0918 26.2867 21.0918C25.9258 21.0918 25.5794 21.2346 25.3234 21.4891L25 21.8125C24.6466 22.1467 24.1187 21.6367 23.7766 21.5828C23.4194 21.4797 23.5084 21.0128 23.5 20.7344C23.4998 20.3739 23.3565 20.0283 23.1016 19.7734C22.8467 19.5185 22.5011 19.3752 22.1406 19.375H20.3594C19.9989 19.3752 19.6533 19.5185 19.3984 19.7734C19.1435 20.0283 19.0002 20.3739 19 20.7344C18.992 21.025 19.0806 21.4764 18.7188 21.5875C18.3869 21.6297 17.8469 22.1547 17.5 21.8125L17.1766 21.4891C16.9206 21.2346 16.5742 21.0918 16.2133 21.0918C15.8523 21.0918 15.506 21.2346 15.25 21.4891L13.9891 22.75C13.7346 23.006 13.5918 23.3523 13.5918 23.7133C13.5918 24.0742 13.7346 24.4206 13.9891 24.6766L14.3125 25C14.3751 25.0618 14.4161 25.1421 14.4296 25.229C14.4431 25.316 14.4284 25.4049 14.3875 25.4828C14.1419 25.8658 14.1944 26.4588 13.6938 26.5H13.2344C12.8739 26.5002 12.5283 26.6435 12.2734 26.8984C12.0185 27.1533 11.8752 27.4989 11.875 27.8594V29.6406C11.8752 30.0011 12.0185 30.3467 12.2734 30.6016C12.5283 30.8565 12.8739 30.9998 13.2344 31H13.6938C13.7804 31.0003 13.8649 31.0276 13.9354 31.078C14.0059 31.1283 14.0591 31.1994 14.0875 31.2813C14.1302 31.6169 14.6537 32.1452 14.3125 32.5L13.9891 32.8234C13.7346 33.0794 13.5918 33.4258 13.5918 33.7867C13.5918 34.1477 13.7346 34.494 13.9891 34.75L15.25 36.0109C15.506 36.2654 15.8523 36.4082 16.2133 36.4082C16.5742 36.4082 16.9206 36.2654 17.1766 36.0109L17.5 35.6875C17.8534 35.3528 18.3813 35.8633 18.7234 35.9172C19.0811 36.0198 18.9916 36.4867 19 36.7656C19.0002 37.1261 19.1435 37.4717 19.3984 37.7266C19.6533 37.9815 19.9989 38.1248 20.3594 38.125H22.1406C22.5011 38.1248 22.8467 37.9815 23.1016 37.7266C23.3565 37.4717 23.4998 37.1261 23.5 36.7656C23.5084 36.4741 23.4194 36.0236 23.7812 35.9125C24.1145 35.8703 24.6498 35.3448 25 35.6875L25.3234 36.0109C25.5794 36.2654 25.9258 36.4082 26.2867 36.4082C26.6477 36.4082 26.994 36.2654 27.25 36.0109L28.5109 34.75C28.7654 34.494 28.9082 34.1477 28.9082 33.7867C28.9082 33.4258 28.7654 33.0794 28.5109 32.8234L28.1875 32.5C28.1249 32.4382 28.0839 32.3579 28.0704 32.271C28.0569 32.184 28.0716 32.0951 28.1125 32.0172C28.3581 31.6342 28.3066 31.0408 28.8062 31H29.2656C29.6261 30.9998 29.9717 30.8565 30.2266 30.6016C30.4815 30.3467 30.6248 30.0011 30.625 29.6406V27.8594C30.6248 27.4989 30.4815 27.1533 30.2266 26.8984C29.9717 26.6435 29.6261 26.5002 29.2656 26.5ZM21.25 33.9062C19.8827 33.9055 18.5716 33.362 17.6048 32.3952C16.638 31.4284 16.0945 30.1173 16.0938 28.75C16.3741 21.9091 26.1273 21.9109 26.4062 28.75C26.4055 30.1173 25.862 31.4284 24.8952 32.3952C23.9284 33.362 22.6173 33.9055 21.25 33.9062Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M21.25 24.5312C20.1316 24.5329 19.0595 24.9779 18.2687 25.7687C17.4779 26.5595 17.0329 27.6316 17.0312 28.75C17.268 34.3469 25.2334 34.3455 25.4688 28.75C25.4671 27.6316 25.0221 26.5595 24.2313 25.7687C23.4405 24.9779 22.3684 24.5329 21.25 24.5312ZM21.25 31.5625C20.5043 31.5619 19.7893 31.2654 19.2619 30.7381C18.7346 30.2107 18.4381 29.4957 18.4375 28.75C18.5688 25.0272 23.9322 25.0281 24.0625 28.75C24.0619 29.4957 23.7654 30.2107 23.2381 30.7381C22.7107 31.2654 21.9957 31.5619 21.25 31.5625Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M21.25 26.875C20.7527 26.875 20.2758 27.0725 19.9242 27.4242C19.5725 27.7758 19.375 28.2527 19.375 28.75C19.375 29.2473 19.5725 29.7242 19.9242 30.0758C20.2758 30.4275 20.7527 30.625 21.25 30.625C21.7473 30.625 22.2242 30.4275 22.5758 30.0758C22.9275 29.7242 23.125 29.2473 23.125 28.75C23.125 28.2527 22.9275 27.7758 22.5758 27.4242C22.2242 27.0725 21.7473 26.875 21.25 26.875Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="basis-full space-y-3">
              <h6 className="text-2xl font-medium">Ongoing Support</h6>
              <p className="text-sm">
                Benefit from continuous assistance throughout your scholarship
                journey, keeping you informed and prepared for any challenges
                that arise.
              </p>
            </div>
          </div>

          <div className="flex justify-start gap-4">
            <div className="basis-8">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="4" fill="#F37329" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.5939 30.0743H22.1872C22.1042 30.0744 22.0221 30.0568 21.9463 30.0227C21.8706 29.9886 21.803 29.9387 21.748 29.8765C21.6929 29.8143 21.6518 29.7411 21.6272 29.6617C21.6026 29.5824 21.5952 29.4987 21.6054 29.4163C21.7657 28.1278 22.3912 26.9422 23.3644 26.0826C24.3375 25.223 25.5912 24.7486 26.8897 24.7486C28.1881 24.7486 29.4418 25.223 30.415 26.0826C31.3881 26.9422 32.0137 28.1278 32.174 29.4163C32.1842 29.4987 32.1768 29.5823 32.1522 29.6616C32.1277 29.7409 32.0866 29.8141 32.0316 29.8763C31.9767 29.9385 31.9091 29.9883 31.8334 30.0225C31.7578 30.0566 31.6757 30.0743 31.5927 30.0743H31.5939ZM15.0587 31.3048L13.7632 31.6517C13.6462 31.6832 13.5465 31.76 13.4859 31.865C13.4254 31.97 13.409 32.0947 13.4404 32.2118L15.156 38.6062C15.1876 38.7232 15.2643 38.8229 15.3693 38.8834C15.4743 38.944 15.5991 38.9604 15.7162 38.929L17.0111 38.5821C17.128 38.5504 17.2276 38.4737 17.2881 38.3687C17.3486 38.2637 17.3651 38.1391 17.3339 38.022L15.6183 31.6282C15.5869 31.5112 15.5103 31.4115 15.4053 31.351C15.3004 31.2905 15.1757 31.274 15.0587 31.3054V31.3048ZM17.8712 37.1308L16.496 31.9974C19.1204 30.181 18.8087 30.5618 21.0939 31.1741L25.4263 32.3349C25.6586 32.397 25.8566 32.5489 25.9769 32.7571C26.0971 32.9653 26.1298 33.2127 26.0676 33.4449C26.0055 33.6772 25.8536 33.8752 25.6454 33.9955C25.4372 34.1158 25.1898 34.1484 24.9576 34.0862L21.3406 33.1171C21.2455 33.0943 21.1453 33.1095 21.0613 33.1595C20.9774 33.2095 20.9162 33.2903 20.8909 33.3848C20.8656 33.4792 20.8782 33.5797 20.926 33.665C20.9737 33.7503 21.0529 33.8135 21.1466 33.8413C22.291 34.1478 23.6527 34.5884 24.7859 34.8163C25.2044 34.9212 25.6473 34.8582 26.0199 34.6405C25.9701 34.5696 32.6591 31.211 33.2615 30.9064C33.7636 30.6509 34.4017 30.7687 34.6935 31.2743C34.8294 31.5127 34.8658 31.7951 34.7947 32.0602C34.7236 32.3253 34.5508 32.5516 34.3138 32.6899C31.4533 34.3417 28.1984 36.045 25.4538 37.8052C24.8474 38.1954 23.573 37.8603 22.2142 37.5028C20.6984 37.1044 19.0876 36.6825 17.8701 37.1314L17.8712 37.1308ZM14.59 32.138C14.7044 32.1074 14.8253 32.1114 14.9374 32.1495C15.0495 32.1876 15.1478 32.2581 15.2199 32.3521C15.292 32.446 15.3346 32.5592 15.3423 32.6774C15.35 32.7956 15.3225 32.9134 15.2633 33.0159C15.2041 33.1185 15.1158 33.2012 15.0096 33.2536C14.9034 33.3059 14.784 33.3256 14.6666 33.3102C14.5492 33.2947 14.439 33.2448 14.35 33.1668C14.2609 33.0887 14.197 32.986 14.1663 32.8716C14.146 32.7956 14.1408 32.7163 14.151 32.6384C14.1613 32.5604 14.1868 32.4851 14.2262 32.417C14.2655 32.3489 14.3179 32.2892 14.3803 32.2413C14.4427 32.1934 14.514 32.1583 14.59 32.138ZM27.0119 11.1421L27.5158 12.7042C27.5237 12.7299 27.5398 12.7522 27.5616 12.768C27.5833 12.7837 27.6096 12.792 27.6365 12.7915H29.2771C29.3037 12.7913 29.3297 12.7996 29.3513 12.8152C29.3729 12.8308 29.389 12.8528 29.3972 12.8782C29.4054 12.9035 29.4054 12.9308 29.397 12.9561C29.3887 12.9814 29.3726 13.0034 29.3509 13.0189L28.0203 13.978C27.9984 13.9934 27.9822 14.0154 27.9739 14.0407C27.9657 14.0661 27.9659 14.0934 27.9745 14.1187L28.4843 15.679C28.4929 15.7042 28.4932 15.7315 28.4851 15.7568C28.4769 15.7821 28.4608 15.8042 28.4392 15.8196C28.4177 15.8353 28.3917 15.8438 28.3651 15.8438C28.3384 15.8438 28.3125 15.8353 28.291 15.8196L26.965 14.8523C26.9436 14.8363 26.9176 14.8277 26.8909 14.8277C26.8642 14.8277 26.8382 14.8363 26.8167 14.8523L25.4908 15.8196C25.4692 15.835 25.4434 15.8433 25.417 15.8432C25.3905 15.8431 25.3648 15.8346 25.3434 15.8191C25.322 15.8035 25.306 15.7816 25.2978 15.7565C25.2895 15.7313 25.2894 15.7042 25.2974 15.679L25.8078 14.1187C25.8162 14.0934 25.8163 14.0661 25.8081 14.0408C25.7999 14.0155 25.7837 13.9935 25.7621 13.978L24.4326 13.0159C24.4109 13.0004 24.3948 12.9784 24.3864 12.9531C24.3781 12.9279 24.3781 12.9006 24.3863 12.8752C24.3945 12.8499 24.4106 12.8279 24.4322 12.8123C24.4538 12.7967 24.4798 12.7884 24.5064 12.7886H26.147C26.1732 12.7884 26.1987 12.7799 26.2197 12.7643C26.2408 12.7487 26.2564 12.7269 26.2642 12.7019L26.7687 11.1398C26.7767 11.1144 26.7927 11.0922 26.8142 11.0765C26.8356 11.0607 26.8616 11.0522 26.8882 11.0522C26.9149 11.0522 26.9408 11.0607 26.9623 11.0765C26.9838 11.0922 26.9997 11.1144 27.0078 11.1398L27.0119 11.1421ZM19.8376 16.5972L20.3421 18.1593C20.35 18.1843 20.3655 18.2062 20.3866 18.2218C20.4076 18.2373 20.4331 18.2458 20.4593 18.246H22.0999C22.1266 18.2458 22.1526 18.2541 22.1741 18.2697C22.1957 18.2853 22.2118 18.3073 22.22 18.3327C22.2283 18.358 22.2282 18.3853 22.2199 18.4106C22.2116 18.4359 22.1954 18.4578 22.1738 18.4733L20.8472 19.4337C20.8255 19.4491 20.8092 19.4711 20.801 19.4964C20.7928 19.5218 20.793 19.5491 20.8015 19.5743L21.3119 21.1329C21.3201 21.1582 21.3201 21.1854 21.3119 21.2106C21.3037 21.2358 21.2877 21.2578 21.2662 21.2734C21.2447 21.289 21.2188 21.2973 21.1923 21.2972C21.1657 21.2972 21.1399 21.2887 21.1185 21.273L19.7925 20.3062C19.7711 20.2902 19.7451 20.2816 19.7184 20.2816C19.6917 20.2816 19.6657 20.2902 19.6443 20.3062L18.3201 21.2735C18.2987 21.2892 18.2728 21.2977 18.2463 21.2978C18.2197 21.2979 18.1938 21.2896 18.1723 21.274C18.1508 21.2584 18.1348 21.2364 18.1266 21.2112C18.1184 21.1859 18.1185 21.1587 18.1267 21.1335L18.6365 19.5732C18.6451 19.5479 18.6453 19.5206 18.6371 19.4952C18.6288 19.4698 18.6126 19.4478 18.5908 19.4325L17.2595 18.4704C17.2379 18.4549 17.2217 18.4329 17.2134 18.4076C17.2051 18.3823 17.205 18.3551 17.2132 18.3297C17.2215 18.3044 17.2375 18.2824 17.2591 18.2668C17.2807 18.2512 17.3067 18.2429 17.3333 18.2431H18.974C19.0006 18.2434 19.0267 18.2352 19.0484 18.2196C19.07 18.204 19.086 18.1818 19.0941 18.1564L19.598 16.5942C19.606 16.5689 19.622 16.5467 19.6434 16.531C19.6649 16.5152 19.6909 16.5067 19.7175 16.5067C19.7442 16.5067 19.7701 16.5152 19.7916 16.531C19.8131 16.5467 19.829 16.5689 19.837 16.5942L19.8376 16.5972ZM34.1831 16.5972L34.6876 18.1593C34.6955 18.1842 34.7111 18.2061 34.7322 18.2216C34.7532 18.2372 34.7786 18.2457 34.8048 18.246H36.4454C36.4721 18.2457 36.4982 18.2539 36.5199 18.2694C36.5416 18.285 36.5577 18.307 36.566 18.3324C36.5743 18.3577 36.5743 18.3851 36.566 18.4104C36.5577 18.4358 36.5416 18.4578 36.5199 18.4733L35.1951 19.4337C35.1733 19.4491 35.1571 19.4711 35.1489 19.4964C35.1406 19.5218 35.1408 19.5491 35.1494 19.5743L35.6574 21.1329C35.6656 21.1582 35.6656 21.1854 35.6574 21.2106C35.6492 21.2358 35.6332 21.2578 35.6117 21.2734C35.5902 21.289 35.5643 21.2973 35.5378 21.2972C35.5112 21.2972 35.4854 21.2887 35.464 21.273L34.1404 20.3067C34.1189 20.2908 34.0929 20.2822 34.0662 20.2822C34.0395 20.2822 34.0136 20.2908 33.9921 20.3067L32.6638 21.2735C32.6424 21.2892 32.6166 21.2977 32.59 21.2978C32.5635 21.2979 32.5376 21.2896 32.5161 21.274C32.4946 21.2584 32.4786 21.2364 32.4704 21.2112C32.4622 21.1859 32.4622 21.1587 32.4704 21.1335L32.9808 19.5732C32.9892 19.5479 32.9892 19.5206 32.981 19.4953C32.9728 19.47 32.9567 19.448 32.9351 19.4325L31.605 18.4704C31.5834 18.4549 31.5672 18.4329 31.5589 18.4076C31.5506 18.3823 31.5505 18.3551 31.5588 18.3297C31.567 18.3044 31.583 18.2824 31.6046 18.2668C31.6262 18.2512 31.6522 18.2429 31.6788 18.2431H33.3195C33.3461 18.2434 33.3722 18.2352 33.3939 18.2196C33.4155 18.204 33.4315 18.1818 33.4396 18.1564L33.9435 16.5942C33.9515 16.5689 33.9675 16.5467 33.989 16.531C34.0104 16.5152 34.0364 16.5067 34.063 16.5067C34.0897 16.5067 34.1156 16.5152 34.1371 16.531C34.1586 16.5467 34.1745 16.5689 34.1826 16.5942L34.1831 16.5972ZM26.8912 18.086C27.492 18.086 28.0794 18.2642 28.579 18.5981C29.0786 18.9319 29.468 19.4064 29.698 19.9615C29.9279 20.5166 29.9881 21.1275 29.8709 21.7168C29.7536 22.3062 29.4643 22.8475 29.0394 23.2724C28.6145 23.6973 28.0732 23.9866 27.4839 24.1038C26.8945 24.2211 26.2837 24.1609 25.7285 23.931C25.1734 23.701 24.6989 23.3116 24.3651 22.812C24.0312 22.3124 23.8531 21.725 23.8531 21.1241C23.8531 20.3184 24.1731 19.5456 24.7429 18.9759C25.3127 18.4061 26.0854 18.086 26.8912 18.086Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="basis-full space-y-3">
              <h6 className="text-2xl font-medium">Improved Success Rate</h6>
              <p className="text-sm">
                Increase your chances of receiving funding through expert
                guidance and proven strategies, as evidenced by successful
                student outcomes.
              </p>
            </div>
          </div>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default ServiceBenefits;
