// eslint-disable-next-line react/prop-types
const CartIcon = ({ width = 18, height = 17, color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 17"
      width={width}
      height={height}
      fill={color}
    >
      <path
        d="M15.2702 13.8496C15.2702 14.0096 15.3502 14.1596 15.3802 14.3096C15.472 14.6366 15.472 14.9826 15.3802 15.3096C15.3312 15.4461 15.2675 15.5768 15.1902 15.6996C15.017 15.9494 14.7873 16.1548 14.5196 16.2991C14.252 16.4433 13.9541 16.5223 13.6502 16.5296C13.4265 16.5363 13.2041 16.4918 13.0002 16.3996C12.7324 16.292 12.493 16.1241 12.3005 15.9091C12.108 15.6941 11.9676 15.4376 11.8902 15.1596C11.8109 14.7706 11.8492 14.3668 12.0002 13.9996L12.0502 13.8496H9.2402C9.24349 13.8728 9.24349 13.8964 9.2402 13.9196C9.35665 14.2393 9.40104 14.5807 9.3702 14.9196C9.35219 15.1159 9.29434 15.3064 9.2002 15.4796C9.05864 15.7443 8.85243 15.9689 8.60076 16.1325C8.34909 16.2961 8.06013 16.3934 7.76076 16.4154C7.46139 16.4373 7.16132 16.3832 6.88848 16.2581C6.61563 16.1329 6.37887 15.9408 6.2002 15.6996C5.98882 15.4108 5.88613 15.0567 5.9102 14.6996C5.9102 14.4396 5.9802 14.1896 6.0202 13.9396C6.01616 13.9198 6.01616 13.8994 6.0202 13.8796H5.9602C5.86438 13.8456 5.77085 13.8056 5.6802 13.7596C5.57984 13.7135 5.50047 13.6314 5.45786 13.5295C5.41525 13.4276 5.41252 13.3134 5.4502 13.2096C5.48207 13.0875 5.5291 12.9699 5.5902 12.8596C5.8702 12.2996 6.1502 11.7496 6.4402 11.1996C6.47459 11.119 6.49231 11.0322 6.49231 10.9446C6.49231 10.8569 6.47459 10.7702 6.4402 10.6896C5.6802 8.52957 4.9102 6.37958 4.1402 4.21957C4.1002 4.09957 4.0602 3.99957 4.0002 3.85957C3.95305 3.59074 3.83575 3.33912 3.66015 3.13016C3.48456 2.92121 3.2569 2.76232 3.0002 2.66957L2.7502 2.58957C2.26901 2.44976 1.80064 2.26911 1.3502 2.04957C1.26232 2.01874 1.18391 1.96571 1.12258 1.89562C1.06125 1.82553 1.0191 1.74077 1.0002 1.64957C0.980475 1.55829 0.984318 1.46348 1.01137 1.37409C1.03842 1.2847 1.08779 1.20367 1.15482 1.13864C1.22185 1.07361 1.30434 1.02672 1.39451 1.00239C1.48468 0.97806 1.57956 0.977091 1.6702 0.999575L1.8002 1.04957L4.2102 1.99957C4.31261 2.03594 4.40589 2.09412 4.48359 2.17009C4.56129 2.24606 4.62155 2.33801 4.6602 2.43957C4.79269 2.72857 4.90626 3.02586 5.0002 3.32957C5.1202 3.69957 5.2202 3.78957 5.6202 3.78957H16.9202C16.9951 3.79307 17.0681 3.81404 17.1334 3.85082C17.1987 3.8876 17.2545 3.93915 17.2963 4.00136C17.3381 4.06357 17.3647 4.1347 17.3741 4.20906C17.3834 4.28342 17.3753 4.35894 17.3502 4.42957C17.3155 4.61021 17.2653 4.78753 17.2002 4.95957C16.5502 7.01957 15.8902 9.06957 15.2002 11.1196C15.2002 11.1996 15.1502 11.2696 15.1202 11.3396C15.0835 11.4434 15.016 11.5335 14.9266 11.5979C14.8372 11.6622 14.7303 11.6977 14.6202 11.6996H7.9202C7.81376 11.6899 7.70665 11.6899 7.6002 11.6996C7.52388 11.7116 7.45182 11.7426 7.39065 11.7898C7.32948 11.837 7.28118 11.8988 7.2502 11.9696L6.9102 12.6896H15.4202C15.5333 12.6796 15.6471 12.6796 15.7602 12.6896C15.9034 12.6896 16.0408 12.7465 16.142 12.8477C16.2433 12.949 16.3002 13.0864 16.3002 13.2296C16.3002 13.3728 16.2433 13.5101 16.142 13.6114C16.0408 13.7127 15.9034 13.7696 15.7602 13.7696H15.3002L15.2702 13.8496ZM8.7702 7.28957V7.21957C8.7002 6.51957 8.6302 5.82957 8.5502 5.12957C8.55197 5.09584 8.54628 5.06214 8.53354 5.03085C8.52081 4.99957 8.50134 4.97147 8.47652 4.94856C8.4517 4.92565 8.42214 4.90849 8.38994 4.8983C8.35774 4.8881 8.32369 4.88512 8.2902 4.88958H5.5602C5.5602 4.88958 5.5602 4.88957 5.5602 4.94957L6.3202 7.04957C6.34305 7.1164 6.38614 7.17445 6.44348 7.21566C6.50083 7.25688 6.56958 7.27922 6.6402 7.27957H8.7702V7.28957ZM9.4502 4.90957C9.45476 4.95279 9.45476 4.99636 9.4502 5.03957C9.4502 5.19957 9.4502 5.35957 9.4502 5.51957C9.5102 6.07957 9.5702 6.62957 9.6202 7.18957C9.6202 7.18957 9.6202 7.25957 9.7002 7.25957H12.0002C12.0502 7.25957 12.0702 7.25957 12.0702 7.18957L12.2802 5.23957V4.90957H9.4502ZM16.0002 4.89957H13.3202C13.2702 4.89957 13.2602 4.89957 13.2502 4.95957C13.1902 5.57957 13.1202 6.19957 13.0502 6.81957C13.0502 6.96957 13.0502 7.12957 13.0002 7.28957H15.0602C15.1198 7.29824 15.1804 7.28319 15.229 7.24767C15.2776 7.21214 15.3104 7.15897 15.3202 7.09957L16.0002 4.99957C16.0028 4.96629 16.0028 4.93286 16.0002 4.89957ZM9.8102 8.20957C9.8702 8.91957 9.9402 9.61957 10.0002 10.3196C10.0014 10.352 10.0092 10.3838 10.0231 10.4132C10.037 10.4425 10.0567 10.4687 10.081 10.4902C10.1053 10.5117 10.1337 10.528 10.1645 10.5382C10.1953 10.5484 10.2279 10.5523 10.2602 10.5496H11.6702C11.7202 10.5496 11.7302 10.5496 11.7302 10.4896C11.8002 9.81957 11.8802 9.14957 11.9502 8.48957V8.17957L9.8102 8.20957ZM9.1002 10.5096L8.8902 8.44957C8.88507 8.37973 8.853 8.3146 8.80075 8.26796C8.74851 8.22131 8.68019 8.19679 8.6102 8.19957H6.7502C7.0002 8.99957 7.3002 9.69957 7.5702 10.4296C7.58341 10.4717 7.61019 10.5083 7.64636 10.5336C7.68254 10.559 7.72609 10.5716 7.7702 10.5696H9.1002V10.5096ZM12.9102 8.22957L12.6502 10.5896H14.0002C14.0758 10.5947 14.1509 10.5736 14.2128 10.5299C14.2747 10.4862 14.3197 10.4225 14.3402 10.3496C14.3402 10.2696 14.3902 10.1996 14.4102 10.1196C14.6002 9.50957 14.8002 8.88957 14.9902 8.26957L12.9102 8.22957ZM12.8002 14.7196C12.7989 14.832 12.8199 14.9436 12.862 15.0479C12.9041 15.1522 12.9665 15.2471 13.0456 15.3271C13.1247 15.4071 13.2188 15.4706 13.3226 15.5139C13.4264 15.5573 13.5377 15.5796 13.6502 15.5796C13.8207 15.5816 13.988 15.5328 14.1307 15.4395C14.2734 15.3462 14.3852 15.2126 14.4518 15.0557C14.5185 14.8987 14.5369 14.7255 14.5049 14.558C14.4728 14.3905 14.3917 14.2364 14.2719 14.1151C14.152 13.9938 13.9988 13.9109 13.8317 13.8769C13.6646 13.8429 13.4912 13.8593 13.3334 13.9241C13.1757 13.9889 13.0408 14.0991 12.9459 14.2408C12.8509 14.3824 12.8002 14.5491 12.8002 14.7196ZM6.8002 14.7196C6.79886 14.8329 6.82019 14.9453 6.86294 15.0503C6.90568 15.1552 6.96898 15.2505 7.0491 15.3307C7.12923 15.4108 7.22457 15.4741 7.32952 15.5168C7.43446 15.5596 7.54689 15.5809 7.6602 15.5796C7.77314 15.5796 7.88497 15.5573 7.98931 15.5141C8.09365 15.4709 8.18846 15.4075 8.26831 15.3277C8.34817 15.2478 8.41152 15.153 8.45474 15.0487C8.49796 14.9443 8.5202 14.8325 8.5202 14.7196C8.5202 14.6066 8.49796 14.4948 8.45474 14.3905C8.41152 14.2861 8.34817 14.1913 8.26831 14.1115C8.18846 14.0316 8.09365 13.9683 7.98931 13.925C7.88497 13.8818 7.77314 13.8596 7.6602 13.8596C7.54441 13.8541 7.42873 13.8724 7.32026 13.9133C7.2118 13.9542 7.11284 14.0168 7.02948 14.0974C6.94612 14.1779 6.88012 14.2747 6.83553 14.3817C6.79094 14.4887 6.76871 14.6037 6.7702 14.7196H6.8002Z"
        fill="#CECECC"
      />
    </svg>
  );
};

export default CartIcon;
