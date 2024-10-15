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
          <h2 className="mx-auto mb-10 mt-5 text-center text-3xl font-bold text-white lg:text-4xl">
            University Selection Service Benefits
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
                  d="M26.3917 18.6459V20.0995C26.1363 20.0121 25.8682 19.9673 25.5982 19.9669H25.5942C25.3044 19.9669 25.0199 20.0179 24.7528 20.1151V18.6459H21.0571C19.8621 18.6459 18.892 17.6774 18.892 16.4844V12.1615C18.892 10.9685 19.8621 10 21.0571 10H30.0874C31.2824 10 32.2525 10.9685 32.2525 12.1615V16.4844C32.2525 17.6774 31.2824 18.6459 30.0874 18.6459H26.3917ZM20.6502 13.1695L22.4985 14.6724C22.5336 14.7004 22.5788 14.7066 22.6204 14.6885C22.6612 14.6703 22.6868 14.6326 22.6868 14.5893V13.8892H25.1145C25.2401 13.8892 25.3422 13.7914 25.3422 13.6712V12.5016C25.3422 12.3814 25.2401 12.2836 25.1145 12.2836H22.6868V11.5835C22.6868 11.5402 22.6612 11.5024 22.6204 11.4843C22.6006 11.4754 22.5787 11.4722 22.5572 11.475C22.5356 11.4779 22.5153 11.4866 22.4985 11.5004L20.6502 13.0032C20.6239 13.0249 20.6101 13.0529 20.6101 13.0864C20.6101 13.1193 20.6239 13.1479 20.6502 13.1695ZM30.7827 15.7929C30.7953 15.783 30.8055 15.7703 30.8124 15.7559C30.8194 15.7415 30.823 15.7257 30.8228 15.7097C30.8228 15.6762 30.809 15.6483 30.7827 15.6266L28.9344 14.1237C28.9176 14.11 28.8973 14.1012 28.8757 14.0983C28.8542 14.0955 28.8323 14.0987 28.8125 14.1076C28.7716 14.1258 28.7461 14.1635 28.7461 14.2068V14.9069H26.3184C26.1929 14.9069 26.0907 15.0048 26.0907 15.1249V16.2945C26.0907 16.4147 26.1929 16.5125 26.3184 16.5125H28.7461V17.2126C28.7461 17.2559 28.7716 17.2936 28.8125 17.3118C28.8541 17.33 28.8993 17.3237 28.9344 17.2957L30.7827 15.7929ZM36.5848 40H29.1199V32.4885C29.1199 32.3756 29.0954 32.2641 29.048 32.1616C29.0006 32.0591 28.9315 31.9681 28.8454 31.8949L24.5489 28.2392C24.4199 28.1294 24.3162 27.9929 24.2451 27.8391C24.174 27.6854 24.1372 27.5181 24.1372 27.3487V22.4214C24.1372 22.0357 24.2907 21.6657 24.5639 21.3929C24.8372 21.1201 25.2078 20.9669 25.5942 20.9669H25.5945C25.9809 20.9669 26.3515 21.1201 26.6247 21.3929C26.898 21.6657 27.0515 22.0357 27.0515 22.4214V26.0057C27.0515 26.175 27.0883 26.3423 27.1594 26.4961C27.2305 26.6498 27.3342 26.7863 27.4633 26.8961L30.6818 29.6347C30.8939 29.8151 31.1634 29.9142 31.442 29.9142H37.611C38.2446 29.9143 38.8522 30.1655 39.3002 30.6128C39.7483 31.06 40 31.6666 40 32.2991V40H37.5865V33.1432C37.5865 32.8673 37.3621 32.6432 37.0857 32.6432C36.8093 32.6432 36.5848 32.8673 36.5848 33.1432V40ZM33.4578 22.5366C35.0149 22.5366 36.2791 23.8388 36.2791 25.4428C36.2791 27.0468 35.0149 28.3491 33.4578 28.3491C31.9007 28.3491 30.6366 27.0468 30.6366 25.4428C30.6366 23.8388 31.9007 22.5366 33.4578 22.5366ZM10.0053 39.6306C10.3903 37.689 12.1051 36.2249 14.1622 36.2249C16.2204 36.2249 17.9353 37.6891 18.3211 39.6304C18.3295 39.6755 18.3278 39.7219 18.3162 39.7663C18.3046 39.8106 18.2834 39.8519 18.254 39.8872C18.2247 39.9225 18.1879 39.9509 18.1463 39.9704C18.1047 39.9899 18.0593 40 18.0133 40C16.6309 40 11.6939 40 10.3112 39.9981C10.2655 39.9981 10.2203 39.9881 10.179 39.9687C10.1376 39.9494 10.101 39.9211 10.0718 39.886C10.0426 39.851 10.0215 39.8099 10.01 39.7657C9.9985 39.7216 9.9969 39.6754 10.0053 39.6306ZM14.1622 35.5999C12.9823 35.5999 12.0205 34.6387 12.0205 33.4608C12.0205 32.2829 12.9823 31.3217 14.1622 31.3217C15.3432 31.3217 16.3049 32.2829 16.3049 33.4608C16.3049 34.6387 15.3432 35.5999 14.1622 35.5999ZM18.4317 39.6306C18.8167 37.689 20.5315 36.2249 22.5886 36.2249C24.6469 36.2249 26.3617 37.6891 26.7475 39.6304C26.7559 39.6755 26.7543 39.7219 26.7427 39.7663C26.7311 39.8107 26.7099 39.852 26.6805 39.8873C26.6511 39.9226 26.6143 39.951 26.5727 39.9705C26.5311 39.9899 26.4857 40 26.4397 40C25.0574 40 20.1204 40 18.7376 39.9981C18.6919 39.9981 18.6468 39.9881 18.6054 39.9687C18.564 39.9494 18.5274 39.9211 18.4982 39.886C18.469 39.851 18.4479 39.8099 18.4364 39.7657C18.4249 39.7216 18.4233 39.6754 18.4317 39.6306ZM22.5886 35.5999C21.4087 35.5999 20.447 34.6387 20.447 33.4608C20.447 32.2829 21.4087 31.3217 22.5886 31.3217C23.7696 31.3217 24.7314 32.2829 24.7314 33.4608C24.7314 34.6387 23.7696 35.5999 22.5886 35.5999Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="basis-full space-y-3">
              <h6 className="text-2xl font-medium">Tailored Guidance</h6>
              <p className="text-sm">
                Get personalized university recommendations aligned with your
                academic goals, career aspirations, and study preferences.
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
                  d="M33.5019 31.0428V32.3591C33.5019 33.2409 33.1584 34.0699 32.5351 34.6933C31.9115 35.3169 31.0826 35.6602 30.2008 35.6602H28.411C28.4287 35.5807 28.4379 35.498 28.4379 35.4132C28.4379 35.3284 28.4287 35.2457 28.411 35.1662H30.2008C31.7487 35.1662 33.0079 33.9069 33.0079 32.3591V31.0563H33.2548C33.3374 31.0562 33.4199 31.0517 33.5019 31.0428ZM27.9438 35.4132C27.9438 35.774 27.6502 36.0675 27.2894 36.0675H25.9173C25.5565 36.0675 25.263 35.774 25.263 35.4132C25.263 35.0524 25.5565 34.7589 25.9173 34.7589H27.2894C27.6502 34.7589 27.9438 35.0524 27.9438 35.4132ZM28.6409 21.2207H21.3912C21.3529 21.2207 21.3161 21.236 21.289 21.2631C21.2619 21.2902 21.2466 21.327 21.2466 21.3653V26.4473C21.2466 26.4856 21.2619 26.5224 21.289 26.5495C21.3161 26.5766 21.3529 26.5919 21.3912 26.5919H22.4659C22.5314 26.5919 22.5942 26.6179 22.6405 26.6643C22.6868 26.7106 22.7129 26.7734 22.7129 26.8389V27.8874L23.9359 26.6644C23.9588 26.6414 23.986 26.6232 24.016 26.6108C24.046 26.5984 24.0782 26.592 24.1106 26.592H28.6408C28.6791 26.5919 28.7159 26.5767 28.743 26.5496C28.7701 26.5224 28.7854 26.4857 28.7854 26.4473V21.3653C28.7854 21.327 28.7702 21.2902 28.7431 21.2631C28.716 21.236 28.6793 21.2207 28.6409 21.2207ZM27.058 24.9862H22.9741C22.9086 24.9862 22.8458 24.9602 22.7995 24.9138C22.7532 24.8675 22.7271 24.8047 22.7271 24.7392C22.7271 24.6737 22.7532 24.6108 22.7995 24.5645C22.8458 24.5182 22.9086 24.4922 22.9741 24.4922H27.058C27.1235 24.4922 27.1863 24.5182 27.2326 24.5645C27.279 24.6108 27.305 24.6737 27.305 24.7392C27.305 24.8047 27.279 24.8675 27.2326 24.9138C27.1863 24.9602 27.1235 24.9862 27.058 24.9862ZM27.058 23.3156H22.9741C22.9086 23.3156 22.8458 23.2896 22.7995 23.2433C22.7532 23.197 22.7271 23.1341 22.7271 23.0686C22.7271 23.0031 22.7532 22.9403 22.7995 22.894C22.8458 22.8476 22.9086 22.8216 22.9741 22.8216H27.058C27.1235 22.8216 27.1863 22.8476 27.2326 22.894C27.279 22.9403 27.305 23.0031 27.305 23.0686C27.305 23.1341 27.279 23.197 27.2326 23.2433C27.1863 23.2896 27.1235 23.3156 27.058 23.3156ZM35.0132 25.2564V28.8081C35.0108 29.7756 34.2229 30.562 33.2549 30.5622H31.8863C31.8679 30.5621 31.8503 30.5548 31.8373 30.5418C31.8243 30.5288 31.817 30.5111 31.817 30.4927V23.5716C31.817 23.5333 31.848 23.5023 31.8863 23.5023H33.2548C34.2229 23.5023 35.0108 24.2888 35.0132 25.2564ZM36.255 26.4983V27.5663C36.255 28.0296 35.9366 28.4199 35.5072 28.5301V25.5345C35.9366 25.6447 36.255 26.0348 36.255 26.4983Z"
                  fill="#FDFDFD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.2148 23.5716V30.4927C18.2148 30.531 18.1837 30.5622 18.1454 30.5622H16.777C15.8089 30.5622 15.0209 29.7756 15.0186 28.8081V25.2562C15.0211 24.2885 15.809 23.5023 16.777 23.5023H18.1454C18.1837 23.5023 18.2148 23.5333 18.2148 23.5716ZM33.975 22.9823V23.1265C33.7429 23.048 33.4995 23.0081 33.2545 23.0083H32.6358V22.8646C32.6358 21.8359 32.4343 20.838 32.0368 19.8984C31.653 18.991 31.1036 18.1762 30.4037 17.4765C29.7041 16.7767 28.8893 16.2272 27.9818 15.8434C27.0422 15.4459 26.0443 15.2444 25.0156 15.2444C23.987 15.2444 22.989 15.4459 22.0495 15.8434C21.1422 16.2272 20.3272 16.7765 19.6275 17.4764C18.9279 18.176 18.3784 18.991 17.9947 19.8985C17.5973 20.8381 17.3958 21.836 17.3958 22.8645V23.0084H16.777C16.5252 23.0084 16.2829 23.0499 16.0565 23.1266V22.9821C16.0565 18.042 20.0756 14.0229 25.0156 14.0229C27.4089 14.0229 29.6588 14.9548 31.351 16.647C33.0432 18.3392 33.975 20.5891 33.975 22.9823Z"
                  fill="#FDFDFD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5247 25.5342V28.53C14.0951 28.4197 13.7769 28.0295 13.7769 27.5662V26.4981C13.7768 26.0347 14.0951 25.6444 14.5247 25.5342Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="basis-full space-y-3">
              <h6 className="text-2xl font-medium">Expert Support</h6>
              <p className="text-sm">
                Expert support offers dedicated assistance, helping students
                with application processes, visa requirements, and adapting to
                new cultures.
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
                  d="M18.0522 30.4959C18.6342 30.1479 19.2762 29.8479 19.9842 29.5959L19.4202 27.2679C18.6402 27.1299 18.0162 26.5419 17.8242 25.7859H16.1742C16.2222 28.4439 18.0102 30.4419 18.0522 30.4959ZM20.9622 37.5999C24.1182 38.4459 27.5982 38.0859 30.6522 36.3279C30.8802 36.1959 31.1742 36.2739 31.3062 36.5019L31.5042 36.8379L32.6802 34.6299L30.1782 34.5459L30.3762 34.8819C30.5082 35.1099 30.4302 35.4039 30.2022 35.5359C24.5382 38.8119 17.2842 36.8739 13.9962 31.1979C10.7142 25.5399 12.6642 18.2679 18.3342 14.9979C18.5622 14.8659 18.8562 14.9439 18.9882 15.1719L19.1862 15.5139L20.3682 13.3059L17.8602 13.2279L18.0582 13.5699C18.1902 13.7979 18.1122 14.0919 17.8842 14.2239C11.7762 17.7519 9.68816 25.5579 13.2102 31.6539C14.9742 34.7079 17.8062 36.7539 20.9622 37.5999ZM36.3042 22.4259C36.2442 22.1679 36.4002 21.9099 36.6642 21.8499C36.9222 21.7899 37.1802 21.9459 37.2402 22.2099C37.9782 25.3179 37.5642 28.5759 36.1062 31.4019C35.9862 31.6359 35.6982 31.7319 35.4582 31.6119C35.2242 31.4919 35.1342 31.2039 35.2542 30.9639C36.5982 28.3419 36.9822 25.3059 36.3042 22.4259ZM24.8382 12.9219C24.5742 12.9099 24.3702 12.6879 24.3822 12.4179C24.3942 12.1539 24.6162 11.9499 24.8862 11.9619C28.4502 12.1299 31.8282 13.7199 34.2162 16.4019C34.3902 16.5999 34.3722 16.9059 34.1742 17.0799C33.9762 17.2539 33.6702 17.2419 33.4962 17.0379C31.2762 14.5479 28.1382 13.0719 24.8382 12.9219ZM36.0402 16.2519L36.7182 17.4879L38.1102 17.7579C38.4702 17.8299 38.6502 18.2799 38.3442 18.5859L37.4082 19.5879L37.5822 20.9979C37.6242 21.3579 37.2582 21.6759 36.8682 21.4719L35.6202 20.8899L34.3362 21.4899C33.9942 21.6519 33.6162 21.3639 33.6582 20.9979L33.8322 19.5879L32.8662 18.5559C32.6082 18.2799 32.7582 17.8299 33.1242 17.7579L34.5102 17.4879L35.1942 16.2519C35.3802 15.9099 35.8662 15.9219 36.0402 16.2519ZM20.4942 24.5559C19.8642 23.9259 18.7662 24.3699 18.7662 25.2699C18.7662 26.1699 19.8582 26.6139 20.4942 25.9839C20.8902 25.5939 20.8902 24.9519 20.4942 24.5559ZM20.3622 30.5379C19.7862 30.7359 19.2522 30.9699 18.7782 31.2459C19.7322 32.1279 20.9022 32.7819 22.1922 33.1179C21.4242 32.4219 20.8182 31.5099 20.3622 30.5379ZM18.7782 19.2999C19.2582 19.5759 19.7922 19.8159 20.3622 20.0079C20.8122 19.0239 21.4242 18.1239 22.1922 17.4279C20.8962 17.7699 19.7322 18.4239 18.7782 19.2999ZM19.9782 20.9499C19.2702 20.7099 18.6282 20.4039 18.0462 20.0499C16.9662 21.3339 16.2762 22.9659 16.1622 24.7599H17.8122C18.0102 23.9979 18.6342 23.4159 19.4082 23.2719C19.5342 22.4559 19.7262 21.6759 19.9782 20.9499ZM28.1682 30.5379C27.7002 31.5459 27.0942 32.4339 26.3382 33.1179C27.6342 32.7759 28.7982 32.1219 29.7522 31.2459C29.2782 30.9699 28.7382 30.7359 28.1682 30.5379ZM29.2482 25.7859C29.2002 27.1539 28.9482 28.4499 28.5462 29.5959C29.2482 29.8419 29.8962 30.1419 30.4722 30.4959C31.5882 29.1759 32.2542 27.5139 32.3562 25.7859H29.2482ZM28.5522 20.9499C28.9542 22.0959 29.2002 23.3919 29.2542 24.7599H32.3682C32.2542 22.9719 31.5642 21.3399 30.4842 20.0499C29.9022 20.4039 29.2542 20.7099 28.5522 20.9499ZM26.3382 17.4279C27.0882 18.1119 27.7002 19.0059 28.1682 20.0079C28.7442 19.8099 29.2782 19.5759 29.7522 19.2999C28.7982 18.4239 27.6342 17.7699 26.3382 17.4279ZM27.1782 20.2959C27.1362 20.1999 27.0822 20.1039 27.0342 20.0079C26.3262 18.6699 25.3602 17.7039 24.2622 17.3319C23.3202 17.6559 22.4742 18.4119 21.8022 19.4739C21.6342 19.7259 21.4902 20.0019 21.3522 20.2959C23.2182 20.7399 25.3122 20.7399 27.1782 20.2959ZM28.2282 24.7659C28.1802 23.4939 27.9462 22.2939 27.5742 21.2499C25.4502 21.7899 23.0742 21.7899 20.9562 21.2499C20.7222 21.8979 20.5482 22.6059 20.4342 23.3559C21.0762 23.5719 21.5742 24.1059 21.7482 24.7719H28.2342V24.7659H28.2282ZM27.5742 29.3019C27.9522 28.2519 28.1802 27.0579 28.2282 25.7859H21.7482C21.5742 26.4459 21.0822 26.9799 20.4342 27.2019C20.5482 27.9459 20.7282 28.6539 20.9562 29.3079C23.0742 28.7619 25.4562 28.7619 27.5742 29.3019ZM24.2682 33.2139C25.4802 32.7999 26.4942 31.6839 27.1782 30.2499C25.3122 29.8059 23.2182 29.8059 21.3522 30.2499C22.0002 31.5879 22.9962 32.7819 24.2682 33.2139Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="basis-full space-y-3">
              <h6 className="text-2xl font-medium">Global Opportunities</h6>
              <p className="text-sm">
                Global opportunities connect students with diverse educational
                programs and experiences worldwide, broadening their horizons
                and careers.
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
                  d="M25.3847 32.9412H24.1182C23.9721 33.615 23.7058 34.2571 23.3319 34.8364L24.2278 35.7323C23.7597 36.3997 23.1789 36.9805 22.5114 37.4487L21.6164 36.5536C21.0364 36.9264 20.3942 37.1921 19.7203 37.3379V38.6055C18.9173 38.746 18.096 38.746 17.293 38.6055V37.3391C16.6192 37.1929 15.9772 36.9266 15.3978 36.5529L14.5019 37.4487C13.8345 36.9805 13.2537 36.3997 12.7855 35.7323L13.6806 34.8373C13.3078 34.2573 13.0422 33.615 12.8963 32.9412H11.6288C11.4883 32.1381 11.4883 31.3169 11.6288 30.5138H12.8963C13.0421 29.84 13.3078 29.1978 13.6806 28.6178L12.7855 27.7227C13.2537 27.0553 13.8345 26.4745 14.5019 26.0063L15.3978 26.9022C15.9772 26.5284 16.6192 26.2621 17.293 26.1159V24.8495C18.096 24.709 18.9173 24.709 19.7203 24.8495V26.1171C20.3942 26.2629 21.0364 26.5286 21.6164 26.9014L22.5114 26.0063C23.1788 26.4745 23.7596 27.0553 24.2278 27.7227L23.3319 28.6186C23.7058 29.1979 23.9721 29.8399 24.1182 30.5137H25.3847C25.525 31.3167 25.525 32.138 25.3847 32.941V32.9412ZM30.189 24.6973H25.0429V25.8821C25.0436 26.1254 25.1406 26.3587 25.3127 26.5308C25.4848 26.7029 25.718 26.7999 25.9613 26.8006H29.2706C29.514 26.7999 29.7472 26.7029 29.9193 26.5308C30.0913 26.3587 30.1883 26.1254 30.189 25.8821V24.6973ZM26.9331 11.7578C26.9331 11.6335 26.9825 11.5143 27.0704 11.4264C27.1583 11.3384 27.2775 11.2891 27.4019 11.2891C27.5262 11.2891 27.6454 11.3384 27.7333 11.4264C27.8212 11.5143 27.8706 11.6335 27.8706 11.7578V12.6149C27.8706 12.7392 27.8212 12.8585 27.7333 12.9464C27.6454 13.0343 27.5262 13.0837 27.4019 13.0837C27.2775 13.0837 27.1583 13.0343 27.0704 12.9464C26.9825 12.8585 26.9331 12.7392 26.9331 12.6149V11.7578ZM20.7243 19.3323C20.6 19.3323 20.4808 19.2829 20.3929 19.195C20.305 19.1071 20.2556 18.9879 20.2556 18.8635C20.2556 18.7392 20.305 18.62 20.3929 18.5321C20.4808 18.4442 20.6 18.3948 20.7243 18.3948H21.5814C21.7058 18.3948 21.825 18.4442 21.9129 18.5321C22.0008 18.62 22.0502 18.7392 22.0502 18.8635C22.0502 18.9879 22.0008 19.1071 21.9129 19.195C21.825 19.2829 21.7058 19.3323 21.5814 19.3323H20.7243ZM22.26 14.2591C22.1742 14.1708 22.1267 14.0522 22.1276 13.9291C22.1285 13.806 22.1778 13.6882 22.2649 13.6011C22.3519 13.514 22.4698 13.4647 22.5929 13.4638C22.716 13.4629 22.8346 13.5105 22.9229 13.5963L23.5292 14.2024C23.5737 14.2457 23.6093 14.2974 23.6337 14.3546C23.6581 14.4117 23.6709 14.4731 23.6713 14.5352C23.6718 14.5974 23.6599 14.659 23.6363 14.7165C23.6127 14.774 23.578 14.8262 23.534 14.8701C23.4901 14.9141 23.4378 14.9488 23.3804 14.9724C23.3229 14.9959 23.2613 15.0078 23.1991 15.0074C23.137 15.0069 23.0756 14.9941 23.0184 14.9697C22.9613 14.9453 22.9096 14.9098 22.8663 14.8652L22.26 14.2591ZM34.5076 17.9666C34.6319 17.9666 34.7511 18.016 34.839 18.1039C34.9269 18.1918 34.9763 18.311 34.9763 18.4353C34.9763 18.5597 34.9269 18.6789 34.839 18.7668C34.7511 18.8547 34.6319 18.9041 34.5076 18.9041H33.6505C33.5262 18.9041 33.4069 18.8547 33.319 18.7668C33.2311 18.6789 33.1817 18.5597 33.1817 18.4353C33.1817 18.311 33.2311 18.1918 33.319 18.1039C33.4069 18.016 33.5262 17.9666 33.6505 17.9666H34.5076ZM32.0063 13.2935C32.0945 13.2072 32.2132 13.1592 32.3366 13.1599C32.46 13.1606 32.5782 13.2099 32.6655 13.2972C32.7527 13.3844 32.8021 13.5026 32.8027 13.626C32.8034 13.7494 32.7554 13.8681 32.6691 13.9564L32.0631 14.5624C32.0198 14.607 31.968 14.6425 31.9109 14.6669C31.8538 14.6913 31.7924 14.7041 31.7302 14.7046C31.6681 14.705 31.6065 14.6931 31.549 14.6696C31.4915 14.646 31.4393 14.6112 31.3953 14.5673C31.3514 14.5234 31.3166 14.4711 31.2931 14.4137C31.2695 14.3562 31.2576 14.2946 31.258 14.2324C31.2585 14.1703 31.2713 14.1089 31.2957 14.0517C31.3201 13.9946 31.3556 13.9429 31.4002 13.8996L32.0063 13.2935ZM28.6685 27.2693V27.5154C28.6682 27.615 28.6285 27.7104 28.5581 27.7808C28.4877 27.8512 28.3923 27.8908 28.2928 27.8911H26.9393C26.8398 27.8909 26.7444 27.8512 26.674 27.7808C26.6036 27.7104 26.5639 27.615 26.5636 27.5154V27.2693H28.6685ZM25.0074 24.2299C25.0191 24.229 25.0309 24.2286 25.0429 24.2286H26.7557V20.6657H26.4413C25.3369 20.6657 24.7658 19.3206 25.5565 18.5295C26.3472 17.7384 27.6927 18.3094 27.6927 19.4139H27.6909L27.6889 19.7282H27.8226L27.8207 19.4139H27.8188C27.8188 18.3095 29.164 17.7385 29.955 18.5295C30.746 19.3205 30.1751 20.6657 29.0706 20.6657H28.7563V24.2286H30.1886C30.2005 24.2286 30.2124 24.229 30.2241 24.2299C30.5126 22.3826 32.4786 21.9555 32.4786 18.6494C32.4668 17.3674 31.9493 16.1419 31.0386 15.2395C30.1278 14.3371 28.8976 13.8308 27.6155 13.8308C26.3334 13.8308 25.1032 14.3371 24.1925 15.2395C23.2818 16.1419 22.7642 17.3674 22.7524 18.6494C22.7524 21.9555 24.7184 22.3826 25.0069 24.2299H25.0074ZM27.6932 24.2286V20.6657H27.8193V24.2286H27.6932ZM28.755 19.4139H28.7568C28.7569 19.3519 28.7753 19.2912 28.8099 19.2397C28.8444 19.1881 28.8934 19.148 28.9507 19.1242C29.0081 19.1005 29.0712 19.0944 29.132 19.1065C29.1929 19.1186 29.2487 19.1485 29.2926 19.1924C29.3365 19.2362 29.3664 19.2921 29.3785 19.353C29.3906 19.4138 29.3844 19.4769 29.3607 19.5342C29.337 19.5916 29.2969 19.6406 29.2453 19.6751C29.1938 19.7097 29.1331 19.7281 29.0711 19.7282H28.757L28.755 19.4139ZM26.7555 19.7282H26.4413C26.3792 19.7281 26.3186 19.7097 26.267 19.6752C26.2155 19.6406 26.1753 19.5916 26.1516 19.5343C26.1279 19.4769 26.1217 19.4139 26.1338 19.353C26.1459 19.2922 26.1758 19.2363 26.2197 19.1924C26.2635 19.1485 26.3194 19.1186 26.3803 19.1065C26.4411 19.0944 26.5042 19.1005 26.5615 19.1242C26.6189 19.1479 26.6679 19.1881 26.7024 19.2397C26.737 19.2912 26.7554 19.3519 26.7555 19.4139H26.7577L26.7557 19.7282H26.7555ZM25.4899 36.2524V38.7109H27.6159V36.2524H25.4899ZM36.3504 30.7591H38.4764V38.7109H36.3504V30.7591H36.3504ZM26.8038 31.8724C26.7482 31.908 26.6856 31.9313 26.6203 31.9408C26.5549 31.9503 26.4883 31.9458 26.4249 31.9276C26.4324 31.6265 26.4229 31.3253 26.3965 31.0253L29.9222 28.7803C29.9803 28.7432 30.0458 28.7195 30.1141 28.7108C30.1825 28.7021 30.2519 28.7087 30.3174 28.73L30.3177 28.729L33.6952 29.8261L36.4284 27.5771L36.0634 27.5579C35.9396 27.5515 35.8233 27.4963 35.7402 27.4042C35.6571 27.3122 35.614 27.1909 35.6203 27.0671C35.6266 26.9433 35.6819 26.827 35.7739 26.7439C35.8659 26.6608 35.9872 26.6177 36.1111 26.624L37.6776 26.7067C37.7434 26.7102 37.8077 26.7275 37.8663 26.7575C37.9249 26.7875 37.9766 26.8295 38.0179 26.8808C38.0591 26.9321 38.0891 26.9916 38.1058 27.0553C38.1226 27.119 38.1257 27.1855 38.115 27.2505L37.8559 28.7962C37.8464 28.8573 37.8248 28.9159 37.7925 28.9687C37.7602 29.0214 37.7177 29.0672 37.6676 29.1034C37.6174 29.1397 37.5606 29.1656 37.5004 29.1797C37.4402 29.1938 37.3778 29.1958 37.3167 29.1857C37.2557 29.1755 37.1973 29.1534 37.1449 29.1205C37.0925 29.0876 37.0472 29.0446 37.0115 28.9941C36.9758 28.9436 36.9505 28.8865 36.937 28.8261C36.9236 28.7658 36.9222 28.7033 36.933 28.6424L36.9857 28.3278L34.1124 30.6921C34.0513 30.7491 33.976 30.7887 33.8945 30.8068C33.8129 30.8248 33.728 30.8207 33.6485 30.7949L30.237 29.6866L26.8038 31.8726V31.8724ZM32.7302 33.3676H34.8562V38.7109H32.7303V33.3679L32.7302 33.3676ZM29.11 32.4951H31.2361V38.7109H29.1101V32.4954L29.11 32.4951ZM19.9881 30.8632C19.9881 30.2542 19.5439 29.7698 18.9754 29.5987V29.2973C18.9754 29.1729 18.926 29.0537 18.8381 28.9658C18.7502 28.8779 18.6309 28.8285 18.5066 28.8285C18.3823 28.8285 18.2631 28.8779 18.1752 28.9658C18.0873 29.0537 18.0379 29.1729 18.0379 29.2973V29.5987C17.8355 29.6589 17.6478 29.7604 17.4866 29.8967C16.516 30.7251 17.1761 32.1963 18.5066 32.1963C18.9558 32.1963 19.2269 32.5848 18.9188 32.8479C18.5814 33.1358 17.9627 32.9453 17.9627 32.5919C17.9627 32.4676 17.9133 32.3483 17.8254 32.2604C17.7375 32.1725 17.6183 32.1231 17.4939 32.1231C17.3696 32.1231 17.2504 32.1725 17.1625 32.2604C17.0746 32.3483 17.0252 32.4676 17.0252 32.5919C17.0252 33.2008 17.4694 33.6852 18.0379 33.8564V34.1578C18.0379 34.2821 18.0873 34.4013 18.1752 34.4893C18.2631 34.5772 18.3823 34.6265 18.5066 34.6265C18.6309 34.6265 18.7502 34.5772 18.8381 34.4893C18.926 34.4013 18.9754 34.2821 18.9754 34.1578V33.8564C19.1777 33.7962 19.3654 33.6947 19.5266 33.5583C20.4973 32.7298 19.8372 31.2588 18.5066 31.2588C18.0574 31.2588 17.7864 30.8702 18.0945 30.6072C18.432 30.3192 19.0506 30.5098 19.0506 30.8632C19.0506 30.9875 19.0999 31.1067 19.1878 31.1946C19.2758 31.2825 19.395 31.3319 19.5193 31.3319C19.6436 31.3319 19.7628 31.2825 19.8508 31.1946C19.9387 31.1067 19.9881 30.9875 19.9881 30.8632ZM18.5066 28.0376C17.7768 28.0376 17.0634 28.254 16.4566 28.6595C15.8498 29.0649 15.3768 29.6412 15.0976 30.3155C14.8183 30.9897 14.7452 31.7317 14.8876 32.4475C15.03 33.1632 15.3814 33.8207 15.8975 34.3368C16.4135 34.8528 17.071 35.2042 17.7868 35.3466C18.5026 35.489 19.2445 35.4159 19.9187 35.1366C20.593 34.8573 21.1693 34.3844 21.5747 33.7775C21.9802 33.1707 22.1966 32.4573 22.1966 31.7275C22.1966 31.2429 22.1011 30.7631 21.9157 30.3154C21.7303 29.8677 21.4585 29.461 21.1158 29.1183C20.7732 28.7757 20.3664 28.5039 19.9187 28.3185C19.471 28.133 18.9912 28.0376 18.5066 28.0376Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="basis-full space-y-3">
              <h6 className="text-2xl font-medium">Financial Aid Insights</h6>
              <p className="text-sm">
                Financial aid insights provide guidance on scholarships, grants,
                and funding options for studying abroad effectively.
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
                <g clipPath="url(#clip0_1163_12242)">
                  <path
                    d="M32.8263 33.9412V40H17.1737V33.9412C17.1727 32.5715 17.6674 31.2476 18.5664 30.2142C19.4655 29.1808 20.7083 28.5078 22.065 28.3194C22.0981 29.9106 23.4025 31.1956 25 31.1956C26.5975 31.1956 27.9025 29.9106 27.935 28.3194C29.2917 28.5078 30.5345 29.1808 31.4336 30.2142C32.3326 31.2476 32.8273 32.5715 32.8263 33.9412ZM22.5806 19C22.9562 18.7614 23.2745 18.443 23.5131 18.0675C23.5555 18.002 23.613 17.9476 23.6808 17.9089C23.7485 17.8703 23.8246 17.8484 23.9025 17.8452C23.9805 17.8421 24.0581 17.8576 24.1287 17.8906C24.1994 17.9237 24.2612 17.9732 24.3087 18.035C24.8185 18.6853 25.4913 19.1893 26.2588 19.4956C27.765 20.0894 29.1481 19.6912 29.6763 19.4956C29.7305 19.4755 29.7878 19.4645 29.8456 19.4631V18.8756C29.8456 16.4956 27.9219 14.565 25.5412 14.565H24.4588C22.0781 14.565 20.1544 16.4956 20.1544 18.8762V19.4631C20.1785 19.462 20.2027 19.4641 20.2262 19.4694C20.6244 19.535 21.6412 19.6131 22.5806 19ZM25 26.9562C25.6364 26.9564 26.2666 26.8312 26.8545 26.5877C27.4425 26.3443 27.9767 25.9874 28.4267 25.5374C28.8767 25.0874 29.2337 24.5531 29.4771 23.9652C29.7206 23.3772 29.8458 22.747 29.8456 22.1106V20.4737C29.4281 20.6112 28.75 20.7869 27.9219 20.7869C27.3088 20.7869 26.6175 20.6894 25.9 20.4087C25.1646 20.1177 24.4998 19.673 23.95 19.1044C23.7057 19.3829 23.4224 19.6246 23.1088 19.8219C21.9806 20.5525 20.8 20.5325 20.1544 20.4481V22.1106C20.1544 23.4481 20.6956 24.6606 21.5694 25.535C22.019 25.9868 22.5536 26.345 23.1425 26.5889C23.7313 26.8329 24.3626 26.9577 25 26.9562ZM23.0438 27.6019V28.2606C23.0438 29.3431 23.9175 30.2169 25 30.2169C26.0825 30.2169 26.9562 29.3431 26.9562 28.2606V27.5956C26.329 27.8221 25.6669 27.937 25 27.935C24.3336 27.9374 23.6718 27.8247 23.0438 27.6019ZM40 13.9131C40 16.0719 38.2456 17.8256 36.0875 17.8256C33.9294 17.8256 32.1737 16.0719 32.1737 13.9131C32.1737 11.7544 33.9281 10 36.0875 10C38.2469 10 40 11.755 40 13.9131ZM37.8606 12.615C37.7686 12.5241 37.6444 12.4731 37.515 12.4731C37.3856 12.4731 37.2614 12.5241 37.1694 12.615L35.6106 14.1737L35.0044 13.5675C34.815 13.3781 34.5025 13.3781 34.3131 13.5675C34.1238 13.7569 34.1238 14.0694 34.3131 14.2587L35.265 15.2113C35.3631 15.3088 35.4869 15.3544 35.6106 15.3544C35.7344 15.3544 35.8587 15.3088 35.9562 15.2106L37.8606 13.3069C37.9517 13.2148 38.0028 13.0905 38.0028 12.9609C38.0028 12.8314 37.9517 12.7071 37.8606 12.615ZM17.8263 13.9131C17.8263 16.0719 16.0719 17.8256 13.9131 17.8256C11.7544 17.8256 10 16.0725 10 13.9138C10 11.755 11.7544 10 13.9125 10C16.0706 10 17.8263 11.755 17.8263 13.9131ZM14.6106 13.9131L15.4 13.1238C15.4909 13.0304 15.5417 12.9053 15.5417 12.775C15.5417 12.6447 15.4909 12.5196 15.4 12.4262C15.3066 12.3354 15.1815 12.2845 15.0512 12.2845C14.921 12.2845 14.7959 12.3354 14.7025 12.4262L13.9125 13.215L13.1238 12.4262C13.0304 12.3354 12.9053 12.2845 12.775 12.2845C12.6447 12.2845 12.5196 12.3354 12.4262 12.4262C12.3354 12.5196 12.2845 12.6447 12.2845 12.775C12.2845 12.9053 12.3354 13.0304 12.4262 13.1238L13.215 13.9131L12.4262 14.7019C12.3352 14.7953 12.2842 14.9205 12.2842 15.0509C12.2842 15.1814 12.3352 15.3066 12.4262 15.4C12.5192 15.4898 12.6427 15.5411 12.7719 15.5437C12.9032 15.5424 13.029 15.491 13.1238 15.4L13.9131 14.6106L14.7025 15.4C14.8 15.4913 14.9237 15.5437 15.0544 15.5437C15.1836 15.5411 15.307 15.4898 15.4 15.4C15.4911 15.3066 15.542 15.1814 15.542 15.0509C15.542 14.9205 15.4911 14.7953 15.4 14.7019L14.6106 13.9131Z"
                    fill="#FDFDFD"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1163_12242">
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
              <h6 className="text-2xl font-medium">Informed Decisions</h6>
              <p className="text-sm">
                Informed decisions enable students to select optimal study
                programs by analyzing data, options, and expert recommendations
                effectively.
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
                <g clipPath="url(#clip0_1163_12249)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.6476 28.2293C31.6166 25.987 31.8917 23.3468 31.9334 20.7663C29.4868 20.5431 26.8711 19.6554 25.0055 17.9971C23.2821 19.636 20.3515 20.5472 18.068 20.7654C18.1096 23.3462 18.3847 25.9868 19.3538 28.2293C20.3387 30.5085 22.0541 32.3895 25.0007 33.3915C27.9473 32.3895 29.6627 30.5084 30.6476 28.2293ZM26.9514 23.6768C28.0287 24.7541 28.0287 26.5009 26.9514 27.5782C25.874 28.6555 24.1272 28.6555 23.0499 27.5782C21.9726 26.5009 21.9726 24.754 23.0499 23.6768C24.1272 22.5995 25.8741 22.5995 26.9514 23.6768ZM25.0006 22.0781C26.9608 22.0781 28.55 23.6673 28.55 25.6274C28.55 27.5876 26.9608 29.1768 25.0006 29.1768C23.0405 29.1768 21.4513 27.5876 21.4513 25.6274C21.4513 23.6672 23.0405 22.0781 25.0006 22.0781ZM23.4482 25.8844C23.3731 25.8127 23.3292 25.7144 23.3261 25.6106C23.323 25.5069 23.3609 25.4061 23.4316 25.3301C23.5023 25.2541 23.6001 25.2091 23.7038 25.2047C23.8075 25.2003 23.9088 25.237 23.9856 25.3067L24.6378 25.9145L26.0018 24.5139C26.0379 24.4768 26.081 24.4472 26.1285 24.4267C26.1761 24.4062 26.2272 24.3953 26.279 24.3946C26.3307 24.3939 26.3821 24.4034 26.4302 24.4225C26.4783 24.4416 26.5222 24.4701 26.5593 24.5062C26.5964 24.5423 26.6261 24.5853 26.6465 24.6329C26.667 24.6804 26.6779 24.7315 26.6786 24.7833C26.6793 24.8351 26.6699 24.8865 26.6507 24.9346C26.6316 24.9827 26.6031 25.0265 26.567 25.0636L24.9399 26.7346C24.8686 26.8112 24.7698 26.8563 24.6653 26.8601C24.5607 26.8639 24.459 26.826 24.3824 26.7547L23.4482 25.8843V25.8844ZM31.0035 37.7213C29.1352 38.6051 27.1036 39.0624 25.0007 39.0624C21.1174 39.0624 17.6018 37.4884 15.057 34.9437C9.08272 28.9694 9.69567 19.1426 16.3164 13.9379C16.3571 13.9059 16.3912 13.8661 16.4166 13.8209C16.442 13.7757 16.4582 13.7259 16.4644 13.6745C16.4705 13.623 16.4665 13.5708 16.4525 13.5209C16.4385 13.4709 16.4148 13.4243 16.3827 13.3835L15.9818 12.8214L19.1641 13.3845L18.6589 16.5766L18.2247 15.9675C18.0937 15.7798 17.8318 15.7368 17.6516 15.882C16.297 16.9752 15.1908 18.3651 14.4312 19.9532C12.2797 24.4513 13.2282 29.79 16.7194 33.2812C20.1663 36.7281 25.4031 37.6881 29.8548 35.6602L29.5226 36.891L29.5234 36.8913C29.4968 36.9908 29.5103 37.0968 29.5609 37.1865C29.6116 37.2763 29.6954 37.3426 29.7943 37.3713L31.0035 37.7213ZM33.1007 36.9297L33.4898 37.6211L30.3859 36.7224L31.2281 33.6028L31.5472 34.1699C31.6663 34.382 31.9456 34.4432 32.1517 34.2739C33.5611 33.1857 34.7157 31.7832 35.5103 30.1714C37.7359 25.6566 36.8102 20.2469 33.2819 16.7187C29.7293 13.1661 24.2847 12.2666 19.7833 14.5134L19.9987 13.1524C20.0446 12.9172 19.9023 12.7125 19.6819 12.6738L18.589 12.4804C20.5624 11.4672 22.743 10.9375 25.0006 10.9375C32.7672 10.9375 39.0631 17.2334 39.0631 25C39.0631 27.3089 38.5084 29.4858 37.5254 31.4045C36.5078 33.3905 35.0312 35.103 33.2355 36.4022C33.1496 36.456 33.0876 36.5408 33.0625 36.639C33.0373 36.7372 33.051 36.8414 33.1005 36.9299L33.1007 36.9297Z"
                    fill="#FDFDFD"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1163_12249">
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
              <h6 className="text-2xl font-medium">Comprehensive Support</h6>
              <p className="text-sm">
                Comprehensive support provides guidance through application
                processes, cultural adaptation, and ongoing assistance for a
                successful study abroad experience.
              </p>
            </div>
          </div>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default ServiceBenefits;
