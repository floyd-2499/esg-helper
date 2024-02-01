import React from "react";
import Link from "next/link";
import uris from "@/config/uris/uris";
import styles from "./styles.module.scss";

const LogoMain = () => {
    return (
        <Link className={styles["logo-wrapper"]} href={uris.home}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="33"
                viewBox="0 0 100 33"
                fill="none"
            >
                <g clipPath="url(#clip0_4_9)">
                    <path
                        d="M6.60359 28.3972C5.98969 28.3972 5.55 28.2645 5.28453 27.999C5.01906 27.7169 4.88632 27.1943 4.88632 26.4311C4.88632 25.9167 4.9361 25.2613 5.03565 24.4649C5.15179 23.6519 5.3343 22.5402 5.58318 21.1299C6.01458 18.525 6.35471 16.2685 6.60359 14.3604C6.75292 13.1658 6.82758 12.1702 6.82758 11.3738C6.82758 10.6272 6.55382 10.2539 6.00628 10.2539C5.57489 10.2539 5.05224 10.4779 4.43834 10.9258C3.84102 11.3572 3.17734 12.0541 2.4473 13.0164C2.21501 13.3317 1.95783 13.4893 1.67577 13.4893C1.44348 13.4893 1.23608 13.3815 1.05357 13.1658C0.887647 12.9335 0.804688 12.6763 0.804688 12.3942C0.804688 12.1288 0.854463 11.8633 0.954015 11.5978C1.07016 11.3157 1.25267 11.0005 1.50155 10.6521C2.29797 9.5404 3.18564 8.68592 4.16457 8.0886C5.1435 7.4747 6.12242 7.16775 7.10135 7.16775C8.01391 7.16775 8.71078 7.45811 9.19194 8.03883C9.6897 8.61955 9.93858 9.46574 9.93858 10.5774C9.93858 11.0254 9.8971 11.5563 9.81414 12.1702C9.73118 12.7675 9.65652 13.257 9.59015 13.6386C9.52379 14.0202 9.47401 14.2857 9.44082 14.435C10.3866 11.7305 11.4485 9.84736 12.6265 8.78547C13.8045 7.70699 15.0987 7.16775 16.509 7.16775C17.5875 7.16775 18.4337 7.54936 19.0476 8.3126C19.6781 9.07583 19.9933 10.1543 19.9933 11.548C19.9933 12.0956 19.9187 12.7758 19.7693 13.5889C20.5989 11.2992 21.5696 9.65655 22.6812 8.66103C23.7929 7.66551 25.0705 7.16775 26.514 7.16775C27.6754 7.16775 28.5631 7.54107 29.177 8.28771C29.8075 9.03435 30.1228 10.0796 30.1228 11.4236C30.1228 12.1536 30.0149 13.0413 29.7992 14.0866L28.281 21.2046C28.1151 22.0342 28.0322 22.7476 28.0322 23.345C28.0322 24.0418 28.1898 24.5645 28.505 24.9129C28.8369 25.2613 29.2932 25.4355 29.8739 25.4355C30.4214 25.4355 30.9524 25.253 31.4667 24.888C31.9977 24.523 32.6199 23.9174 33.3333 23.0712C33.5324 22.8389 33.7564 22.7228 34.0053 22.7228C34.221 22.7228 34.3869 22.8223 34.503 23.0214C34.6358 23.2205 34.7022 23.4943 34.7022 23.8427C34.7022 24.4898 34.5445 25.0042 34.2293 25.3858C33.3665 26.4311 32.512 27.1943 31.6658 27.6755C30.8196 28.1566 29.9319 28.3972 29.0028 28.3972C27.5925 28.3972 26.4891 27.9824 25.6927 27.1528C24.8963 26.3066 24.4981 25.1784 24.4981 23.768C24.4981 22.7891 24.6972 21.3705 25.0954 19.5122L26.0909 14.9577C26.1241 14.8084 26.1822 14.5429 26.2651 14.1613C26.3481 13.7797 26.4144 13.4229 26.4642 13.0911C26.514 12.7427 26.5389 12.4025 26.5389 12.0707C26.5389 11.49 26.4227 11.0586 26.1905 10.7765C25.9748 10.4779 25.6595 10.3285 25.2447 10.3285C24.4649 10.3285 23.6436 10.8346 22.7808 11.8467C21.9346 12.8422 21.1216 14.5014 20.3418 16.8243C19.5785 19.1472 18.9563 22.1669 18.4752 25.8835C18.359 26.879 18.1516 27.551 17.853 27.8995C17.5709 28.2313 17.1063 28.3972 16.4592 28.3972C15.8951 28.3972 15.4803 28.2645 15.2148 27.999C14.966 27.7335 14.8415 27.2358 14.8415 26.5057C14.8415 25.8255 14.9328 24.9378 15.1153 23.8427C15.2978 22.731 15.5301 21.4286 15.8122 19.9353C16.5754 15.92 16.957 13.3317 16.957 12.1702C16.957 11.5397 16.8326 11.0752 16.5837 10.7765C16.3514 10.4779 15.9947 10.3285 15.5135 10.3285C14.7005 10.3285 13.8626 10.7931 12.9998 11.7223C12.137 12.6348 11.2908 14.2691 10.4612 16.6252C9.64822 18.9647 8.96795 22.1337 8.42042 26.1324C8.30427 26.9786 8.13006 27.5676 7.89777 27.8995C7.68207 28.2313 7.25068 28.3972 6.60359 28.3972ZM43.7968 22.7228C44.0125 22.7228 44.1784 22.8223 44.2946 23.0214C44.4273 23.2205 44.4937 23.4943 44.4937 23.8427C44.4937 24.5064 44.336 25.0207 44.0208 25.3858C43.4069 26.1324 42.5358 26.821 41.4076 27.4515C40.2959 28.082 39.1013 28.3972 37.8237 28.3972C36.0815 28.3972 34.7293 27.9243 33.7669 26.9786C32.8046 26.0329 32.3234 24.7387 32.3234 23.0961C32.3234 21.9512 32.564 20.8893 33.0452 19.9104C33.5264 18.9149 34.19 18.1268 35.0362 17.546C35.899 16.9653 36.8696 16.675 37.9481 16.675C38.9105 16.675 39.682 16.9653 40.2627 17.546C40.8434 18.1102 41.1338 18.8817 41.1338 19.8606C41.1338 21.0055 40.719 21.9927 39.8894 22.8223C39.0764 23.6353 37.6909 24.2824 35.7331 24.7636C36.1479 25.5268 36.936 25.9084 38.0975 25.9084C38.8441 25.9084 39.6903 25.6512 40.636 25.1369C41.5984 24.6059 42.428 23.9174 43.1248 23.0712C43.3239 22.8389 43.5479 22.7228 43.7968 22.7228ZM37.525 19.114C36.9111 19.114 36.3885 19.4707 35.9571 20.1842C35.5423 20.8976 35.3349 21.7604 35.3349 22.7725V22.8223C36.3138 22.59 37.0853 22.2416 37.6495 21.777C38.2136 21.3124 38.4957 20.7732 38.4957 20.1593C38.4957 19.844 38.4044 19.5952 38.2219 19.4126C38.056 19.2135 37.8237 19.114 37.525 19.114ZM56.4821 22.7228C56.6978 22.7228 56.8637 22.8223 56.9798 23.0214C57.1126 23.2205 57.1789 23.4943 57.1789 23.8427C57.1789 24.5064 57.0213 25.0207 56.706 25.3858C56.0258 26.2154 55.2791 26.9288 54.4661 27.5261C53.6531 28.1069 52.8484 28.3972 52.052 28.3972C50.791 28.3972 49.8287 27.6589 49.165 26.1822C48.4681 27.0616 47.8542 27.6506 47.3233 27.9492C46.8089 28.2479 46.2033 28.3972 45.5064 28.3972C44.4943 28.3972 43.6564 28.0239 42.9928 27.2773C42.3457 26.514 42.0221 25.5268 42.0221 24.3156C42.0221 22.9882 42.3042 21.7604 42.8683 20.6322C43.4324 19.4873 44.204 18.5582 45.1829 17.8447C46.1784 17.1147 47.2901 16.6833 48.5179 16.5505C48.8331 13.3317 49.4305 10.5857 50.3098 8.3126C51.2058 6.0229 52.3755 4.87805 53.819 4.87805C54.5325 4.87805 55.1215 5.2016 55.5861 5.84868C56.0673 6.49577 56.3078 7.4747 56.3078 8.78547C56.3078 10.6438 55.8516 12.8173 54.939 15.3061C54.0264 17.7949 52.8069 20.3501 51.2805 22.9716C51.3468 23.934 51.4879 24.6225 51.7036 25.0373C51.9358 25.4521 52.2262 25.6595 52.5746 25.6595C53.0226 25.6595 53.4789 25.4604 53.9435 25.0622C54.4081 24.664 55.0303 24.0003 55.8101 23.0712C56.0092 22.8389 56.2332 22.7228 56.4821 22.7228ZM53.5453 7.31708C53.23 7.31708 52.9148 7.8812 52.5995 9.00946C52.2843 10.1211 52.0105 11.5812 51.7782 13.3897C51.5625 15.1983 51.4049 17.0898 51.3054 19.0642C53.1637 15.0158 54.0928 11.7637 54.0928 9.30812C54.0928 8.67762 54.0347 8.18816 53.9186 7.83972C53.819 7.49129 53.6946 7.31708 53.5453 7.31708ZM46.3775 25.8835C46.6928 25.8835 47.008 25.7591 47.3233 25.5102C47.6385 25.2447 48.0367 24.7636 48.5179 24.0667C48.352 23.1707 48.269 22.1669 48.269 21.0553C48.269 20.657 48.2856 20.01 48.3188 19.114C47.4062 19.3961 46.643 20.01 46.0291 20.9557C45.4318 21.8849 45.1331 22.9219 45.1331 24.0667C45.1331 25.2779 45.5479 25.8835 46.3775 25.8835ZM58.4146 15.0324C57.7177 15.0324 57.1951 14.8747 56.8467 14.5595C56.4982 14.2276 56.324 13.7714 56.324 13.1906C56.324 12.6099 56.548 12.1288 56.996 11.7471C57.4606 11.3489 58.033 11.1498 58.7133 11.1498C59.3272 11.1498 59.8249 11.2992 60.2065 11.5978C60.5882 11.8965 60.779 12.3196 60.779 12.8671C60.779 13.5308 60.5633 14.0617 60.1319 14.4599C59.7005 14.8415 59.1281 15.0324 58.4146 15.0324ZM58.2155 28.3972C57.137 28.3972 56.3489 28.0156 55.8511 27.2524C55.37 26.4891 55.1294 25.477 55.1294 24.216C55.1294 23.4694 55.2206 22.5154 55.4032 21.3539C55.6023 20.1759 55.8511 19.0808 56.1498 18.0687C56.2991 17.5377 56.4982 17.1727 56.7471 16.9736C56.996 16.7745 57.3942 16.675 57.9417 16.675C58.7879 16.675 59.211 16.957 59.211 17.5212C59.211 17.936 59.0534 18.8983 58.7382 20.4082C58.3399 22.2333 58.1408 23.4694 58.1408 24.1165C58.1408 24.6142 58.2072 24.9959 58.3399 25.2613C58.4727 25.5268 58.6967 25.6595 59.0119 25.6595C59.3106 25.6595 59.6839 25.4521 60.1319 25.0373C60.5799 24.6225 61.1772 23.9672 61.9238 23.0712C62.1229 22.8389 62.3469 22.7228 62.5958 22.7228C62.8115 22.7228 62.9774 22.8223 63.0936 23.0214C63.2263 23.2205 63.2927 23.4943 63.2927 23.8427C63.2927 24.5064 63.135 25.0207 62.8198 25.3858C61.1772 27.3934 59.6424 28.3972 58.2155 28.3972ZM65.9082 28.3972C64.332 28.3972 63.0959 27.9409 62.1999 27.0284C61.3205 26.0992 60.8808 24.8797 60.8808 23.3698C60.8808 22.0259 61.1463 20.8479 61.6773 19.8357C62.2082 18.8236 62.8968 18.0438 63.743 17.4963C64.5892 16.9487 65.4768 16.675 66.406 16.675C67.3185 16.675 68.0237 16.9487 68.5215 17.4963C69.0358 18.0272 69.293 18.7158 69.293 19.562C69.293 20.2588 69.1354 20.8479 68.8201 21.329C68.5215 21.8102 68.1233 22.0508 67.6255 22.0508C67.3102 22.0508 67.0531 21.9761 66.854 21.8268C66.6715 21.6775 66.5802 21.4701 66.5802 21.2046C66.5802 21.0884 66.5968 20.9557 66.63 20.8064C66.6632 20.657 66.688 20.5492 66.7046 20.4828C66.7876 20.234 66.8291 20.0017 66.8291 19.786C66.8291 19.5703 66.771 19.4043 66.6549 19.2882C66.5553 19.1721 66.406 19.114 66.2069 19.114C65.8253 19.114 65.4685 19.2882 65.1367 19.6366C64.8049 19.9685 64.5394 20.4248 64.3403 21.0055C64.1412 21.5862 64.0416 22.225 64.0416 22.9219C64.0416 23.8676 64.2324 24.5894 64.614 25.0871C65.0123 25.5683 65.5681 25.8089 66.2815 25.8089C66.8457 25.8089 67.36 25.6429 67.8246 25.3111C68.3058 24.9793 68.7786 24.4898 69.2432 23.8427C69.4423 23.5938 69.6663 23.4694 69.9152 23.4694C70.1309 23.4694 70.2968 23.5689 70.413 23.768C70.5457 23.9672 70.6121 24.2409 70.6121 24.5894C70.6121 25.1867 70.471 25.701 70.189 26.1324C69.741 26.8293 69.152 27.3851 68.4219 27.7999C67.6919 28.1981 66.854 28.3972 65.9082 28.3972Z"
                        fill="#3F4A49"
                    />
                    <mask
                        id="mask0_4_9"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="72"
                        y="1"
                        width="31"
                        height="31"
                    >
                        <path
                            d="M102.041 1.72556H72.1752V31.5912H102.041V1.72556Z"
                            fill="white"
                        />
                    </mask>
                    <g mask="url(#mask0_4_9)">
                        <mask
                            id="mask1_4_9"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="72"
                            y="1"
                            width="19"
                            height="31"
                        >
                            <path
                                d="M72.1752 1.72556H80.9339L90.4579 2.93372L87.0126 31.5428L72.1752 30.818V1.72556Z"
                                fill="#D9D9D9"
                                fillOpacity="0.81"
                            />
                        </mask>
                        <g mask="url(#mask1_4_9)">
                            <path
                                d="M96.8716 14.3387C97.6058 14.3387 98.1641 14.5642 98.5465 15.0153C98.9298 15.4663 99.1214 16.014 99.1214 16.6584C99.1214 17.4637 98.8502 18.2048 98.3076 18.8814C97.7974 19.5257 97.0947 19.8479 96.2021 19.8479H88.3524L87.2996 28.6916C87.1719 29.5293 86.8052 30.1735 86.1988 30.6246C85.6247 31.0757 84.9544 31.3012 84.1886 31.3012C83.4544 31.3012 82.8483 31.0757 82.3697 30.6246C81.923 30.1735 81.7475 29.5293 81.8432 28.6916L82.8962 19.8479H75.1426C74.4087 19.8479 73.8503 19.6224 73.4675 19.1713C73.0846 18.6881 72.8931 18.1243 72.8931 17.4799C72.8931 16.6745 73.1484 15.9496 73.6589 15.3052C74.2013 14.6609 74.9193 14.3387 75.8127 14.3387H83.6137L84.6673 5.49501C84.7627 4.68956 85.0979 4.06133 85.672 3.61028C86.2469 3.15923 86.9006 2.93372 87.6348 2.93372C88.3682 2.93372 88.9904 3.15923 89.5014 3.61028C90.0116 4.06133 90.219 4.68956 90.1236 5.49501L89.07 14.3387H96.8716Z"
                                fill="#F43535"
                            />
                        </g>
                        <mask
                            id="mask2_4_9"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="87"
                            y="3"
                            width="16"
                            height="28"
                        >
                            <path
                                d="M90.7931 3.46531H98.5465H102.041V30.4313H87.4432L90.7931 3.46531Z"
                                fill="#D9D9D9"
                                fillOpacity="0.81"
                            />
                        </mask>
                        <g mask="url(#mask2_4_9)">
                            <path
                                d="M96.8716 14.3387C97.6058 14.3387 98.1641 14.5642 98.5466 15.0153C98.9298 15.4663 99.1215 16.014 99.1215 16.6584C99.1215 17.4637 98.8502 18.2048 98.3076 18.8814C97.7974 19.5257 97.0947 19.8479 96.2021 19.8479H88.3524L87.2997 28.6916C87.1719 29.5293 86.8052 30.1735 86.1988 30.6246C85.6247 31.0757 84.9544 31.3012 84.1887 31.3012C83.4545 31.3012 82.8484 31.0757 82.3698 30.6246C81.923 30.1735 81.7476 29.5293 81.8432 28.6916L82.8962 19.8479H75.1426C74.4087 19.8479 73.8503 19.6224 73.4675 19.1713C73.0846 18.6881 72.8932 18.1243 72.8932 17.4799C72.8932 16.6745 73.1484 15.9496 73.659 15.3052C74.2014 14.6609 74.9193 14.3387 75.8127 14.3387H83.6137L84.6673 5.49501C84.7627 4.68956 85.0979 4.06133 85.672 3.61028C86.2469 3.15923 86.9006 2.93372 87.6348 2.93372C88.3682 2.93372 88.9904 3.15923 89.5014 3.61028C90.0116 4.06133 90.219 4.68956 90.1236 5.49501L89.07 14.3387H96.8716Z"
                                fill="#FF4444"
                            />
                        </g>
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_4_9">
                        <rect width="100" height="33" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </Link>
    );
};

export default LogoMain;
