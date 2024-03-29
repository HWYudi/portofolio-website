import React from "react";

export default function Experience() {
  return (
    <div className="py-20 bg-[#121212] text-white">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="mx-10 text-3xl font-semibold border-b-2 border-white inline-block">
          Experience
        </h1>
        <div className="mt-20 flex flex-col gap-5">
          <div className="mr-5">
            <h1 className="text-center w-fit text-[#ffd96f] py-2 px-4 bg-[#ffd96f] bg-opacity-25 rounded-sm">
              Tools
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 px-2 gap-4 md:gap-8">
            <div className="border border-[#FFD96F] hover:bg-[#FFD96F] hover:bg-opacity-25 h-fit py-4 px-3 flex items-center gap-4 md:gap-6 rounded-sm">
              <svg
                viewBox="0 0 34 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.32005 0H24.6798C29.4494 0 33.3199 3.8705 33.3199 8.64006C33.3199 11.9825 31.4192 14.8832 28.6403 16.3199C31.4192 17.7567 33.3199 20.6576 33.3199 23.9999C33.3199 28.7695 29.4494 32.64 24.6798 32.64C21.9667 32.64 19.5445 31.3876 17.9602 29.4298V39.3599C17.9602 44.1295 14.0896 48 9.32005 48C4.55047 48 0.679932 44.1295 0.679932 39.3599C0.679932 36.0175 2.58071 33.1167 5.35964 31.6799C2.58071 30.2432 0.679932 27.3423 0.679932 23.9999C0.679932 20.6576 2.58069 17.7567 5.35959 16.3199C2.5807 14.8832 0.679932 11.9825 0.679932 8.64006C0.679932 3.8705 4.55047 0 9.32005 0ZM2.59993 8.64006C2.59993 4.9309 5.61085 1.92 9.32005 1.92H16.0397V15.3599H9.32005L9.29922 15.3599C5.59955 15.3487 2.59993 12.3422 2.59993 8.64006ZM16.0402 23.9086C16.0399 23.939 16.0397 23.9694 16.0397 23.9999C16.0397 24.0304 16.0399 24.0609 16.0402 24.0913V30.7198H9.32001C5.61084 30.72 2.59993 27.7091 2.59993 23.9999C2.59993 20.2977 5.59967 17.2911 9.29939 17.2799L9.32005 17.2799H16.0397L16.0402 23.9086ZM17.9602 24.0804V23.9195C18.0032 20.2565 20.9826 17.2947 24.6523 17.2799H24.6798C24.6867 17.2799 24.6936 17.2799 24.7005 17.2799C28.4002 17.2911 31.3999 20.2977 31.3999 23.9999C31.3999 27.7091 28.389 30.72 24.6798 30.72C20.9975 30.72 18.0033 27.7526 17.9602 24.0804ZM19.2504 17.2799C18.7764 17.6635 18.3437 18.0961 17.9602 18.5701V17.2799H19.2504ZM24.7006 15.3599C24.6937 15.3599 24.6868 15.3599 24.6798 15.3599C24.6693 15.3599 24.6588 15.3599 24.6483 15.3599H17.9602V1.92H24.6798C28.389 1.92 31.3999 4.9309 31.3999 8.64006C31.3999 12.3422 28.4003 15.3487 24.7006 15.3599ZM9.32005 32.6399C5.61085 32.6399 2.59993 35.6508 2.59993 39.3599C2.59993 43.0691 5.61085 46.08 9.32005 46.08C13.0293 46.08 16.0402 43.0691 16.0402 39.3599V32.6399H9.32005Z"
                  fill="white"
                />
              </svg>

              <div>
                <h1 className="text-base font-semibold">Figma</h1>
                <p className="text-xs">Beginner</p>
              </div>
            </div>
            <div className="border border-[#FFD96F] hover:bg-[#FFD96F] hover:bg-opacity-25 h-fit py-4 px-3 flex items-center gap-4 md:gap-6 rounded-sm">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z"
                  fill="white"
                />
              </svg>

              <div>
                <h1 className="text-base font-semibold">Github</h1>
                <p className="text-xs">Beginner</p>
              </div>
            </div>
            <div className="border border-[#FFD96F] hover:bg-[#FFD96F] hover:bg-opacity-25 h-fit py-4 px-3 flex items-center gap-4 md:gap-6 rounded-sm">
              <svg
                viewBox="0 0 46 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <path
                  d="M12.9887 25.6132C12.5316 26.3749 11.8582 26.9906 11.5047 27.89C10.7663 29.4827 11.052 32.9306 10.5862 32.9365C10.0424 33.1973 9.18535 31.6314 8.81988 30.6981C7.89471 28.3375 7.72283 24.5362 8.53688 21.819C9.66406 18.2344 9.73438 18.4219 8.18369 16.7341C6.74992 14.6415 6.06769 11.247 5.14532 8.84184C3.73146 5.69641 0.39843 3.05298 2.17778 1.86048C2.81789 1.32399 4.96768 2.38745 6.56604 3.44137C7.69512 4.18586 8.43358 4.97614 8.67822 4.97193C11.375 4.89844 12.4297 5.01562 16.8039 7.62805C20.8767 10.3899 24.2066 14.3214 26.4844 19.0113C27.0501 20.9761 29.7812 27.375 31.6423 30.6223C32.1229 31.3116 33.9786 31.6814 34.822 32.0641C36.8353 32.7404 37.2266 33.0703 40.051 35.2515C40.5524 35.6309 42.094 36.4626 42.1708 37.1482C39.6858 37.0758 37.7879 37.3237 36.1652 38.0586C35.704 38.2676 34.9686 38.273 34.8934 38.8937C35.293 39.3281 34.9297 39.9609 37.0129 42.0051C39.1323 43.9061 40.1562 44.0625 42.7364 45.5719C45.2088 47.2851 45.2411 47.8172 45.7745 48V47.9243C45.2494 46.6852 45.28 46.8617 44.3614 45.8751C41.0312 41.4062 38.5867 41.7127 37.5783 39.5766C40.2845 38.535 41.6875 38.9062 44.2204 37.9829V37.6793C42.5019 34.9533 37.5938 30.9062 33.191 29.4659C30.3765 24.0972 29.1984 20.279 27.7562 17.19C24.7249 11.6929 16.7188 2.625 9.45545 3.22643C8.98106 3.01344 8.48746 2.39002 8.04235 2.08811C6.27007 0.885643 1.72417 -1.72987 0.411491 1.70878C-0.417354 3.87927 1.6502 5.99737 2.38964 7.09682C2.90873 7.86839 3.57326 8.73342 3.94408 9.60107C4.3071 10.5414 4.20312 11.2383 6.06388 15.8239C7.43947 18.7984 7.69618 17.9256 7.97152 19.0112C7.53522 19.6669 7.51035 20.6848 7.26513 21.5155C5.28125 28.125 8.39362 35.9352 11.4339 34.6443C12.9918 33.9664 12.468 31.3434 13.1069 29.5946C14.0156 31.2969 14.2969 33.5 18.4292 36.8452C19.1633 37.4406 19.95 38.5245 20.888 38.8666C19.9169 38.1935 19.0825 37.1787 18.2879 36.0862C17.0004 34.2088 15.8624 32.1539 14.8258 30.0149C13.1272 26.6285 13.4889 25.9863 12.9887 25.6132ZM10.6379 10.1219C10.1562 8.98438 9.97145 9.24581 9.46144 8.6849C8.94933 8.67478 8.57667 8.75696 8.19368 8.84671C8.17265 8.86018 8.1779 8.88776 8.19531 8.92188C8.43954 9.46091 8.93912 9.80767 9.24122 10.272L9.93969 11.8468C10.4583 11.4752 10.643 10.866 10.6379 10.1219Z"
                  fill="white"
                />
              </svg>

              <div>
                <h1 className="text-base font-semibold">Mysql</h1>
                <p className="text-xs">Beginner</p>
              </div>
            </div>
            <div className="border border-[#FFD96F] hover:bg-[#FFD96F] hover:bg-opacity-25 h-fit py-4 px-3 flex items-center gap-4 md:gap-6 rounded-sm">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <path
                  d="M48 24C48 10.776 37.224 0 24 0C10.752 0 0 10.776 0 24C0 37.248 10.752 48 24 48C37.224 48 48 37.248 48 24ZM18.672 36.888L10.488 14.928C11.808 14.88 13.296 14.736 13.296 14.736C14.496 14.592 14.352 12.024 13.152 12.072C13.152 12.072 9.672 12.336 7.464 12.336C7.032 12.336 6.576 12.336 6.072 12.312C8.01656 9.33429 10.6761 6.8912 13.8079 5.20586C16.9396 3.52052 20.4436 2.64663 24 2.664C29.592 2.664 34.68 4.752 38.52 8.28C36.888 8.016 34.56 9.216 34.56 12.072C34.56 13.848 35.64 15.336 36.72 17.112C37.56 18.576 38.04 20.376 38.04 23.016C38.04 26.592 34.68 35.016 34.68 35.016L27.408 14.928C28.704 14.88 29.376 14.52 29.376 14.52C30.576 14.4 30.432 11.52 29.232 11.592C29.232 11.592 25.776 11.88 23.52 11.88C21.432 11.88 17.928 11.592 17.928 11.592C16.728 11.52 16.584 14.472 17.784 14.52L19.992 14.712L23.016 22.896L18.672 36.888ZM41.784 24C42.36 22.464 43.56 19.512 42.816 13.8C44.496 16.896 45.336 20.304 45.336 24C45.336 31.896 41.184 38.976 34.776 42.672C37.104 36.456 39.432 30.192 41.784 24ZM14.64 43.416C7.488 39.96 2.664 32.472 2.664 24C2.664 20.88 3.216 18.048 4.392 15.384C7.8 24.72 11.208 34.08 14.64 43.416ZM24.312 27.504L30.504 44.256C28.44 44.952 26.28 45.336 24 45.336C22.104 45.336 20.232 45.072 18.504 44.544C20.448 38.832 22.392 33.168 24.312 27.504V27.504Z"
                  fill="white"
                />
              </svg>

              <div>
                <h1 className="text-base font-semibold">Wordpress</h1>
                <p className="text-xs">Beginner</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5">
          <div className="mr-5">
            <h1 className="text-center w-fit text-[#ffd96f] py-2 px-4 bg-[#ffd96f] bg-opacity-25 rounded-sm">
              Other
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 px-2 gap-4 md:gap-8">
            <div className="border border-[#FFD96F] hover:bg-[#FFD96F] hover:bg-opacity-25 h-fit py-4 px-3 flex items-center gap-4 md:gap-6 rounded-sm">
              <svg
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <path
                  d="M43.3395 15.8143L43.9515 9.909H10.0485L11.8485 27.9296H35.3205L34.479 35.6439L26.9235 37.4143L19.4085 35.6246L18.9 30.915H12.195L13.05 40.2994L26.9325 43.6744H27.0765V43.6397L40.8465 40.2994L42.75 21.9394H18.063L17.487 15.8143H43.3395ZM0 0H54L49.0905 48.5344L26.9235 54L4.9095 48.5344L0 0Z"
                  fill="white"
                />
              </svg>

              <div>
                <h1 className="text-base font-semibold">HTML</h1>
                <p className="text-xs">Beginner</p>
              </div>
            </div>
            <div className="border border-[#FFD96F] hover:bg-[#FFD96F] hover:bg-opacity-25 h-fit py-4 px-3 flex items-center gap-4 md:gap-6 rounded-sm">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <path
                  d="M23.9706 48L4.36837 43.2017L0 0H48L43.6271 43.1951L23.9706 48Z"
                  fill="white"
                />
                <path
                  d="M39.8834 40.4445L43.6201 3.53223H24V44.3271L39.8834 40.4445Z"
                  fill="#B0B2B6"
                />
                <path
                  d="M10.0144 19.5553L10.5529 24.8538H24.0001V19.5553H10.0144ZM8.93213 8.83105L9.47834 14.1296H24.0001V8.83105H8.93213ZM24.0001 33.3162L23.9737 33.3223L17.2815 31.7289L16.8536 27.5032H10.8214L11.6632 35.8227L23.9724 38.8355L24.0001 38.8289V33.3162Z"
                  fill="#121212"
                />
                <path
                  d="M37.9474 19.5553L39.0321 8.83105H23.9794V14.1296H32.4467L31.9 19.5553H23.9794V24.8538H31.379L30.6813 31.7256L23.9792 33.3206V38.833L36.2983 35.8227L36.3886 34.9274L37.8009 20.9781L37.9474 19.5553Z"
                  fill="#121212"
                />
              </svg>

              <div>
                <h1 className="text-base font-semibold">CSS</h1>
                <p className="text-xs">Beginner</p>
              </div>
            </div>
            <div className="border border-[#FFD96F] hover:bg-[#FFD96F] hover:bg-opacity-25 h-fit py-4 px-3 flex items-center gap-4 md:gap-6 rounded-sm">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <path
                  d="M0 0H48V48H0V0ZM12.6133 40.1067C13.68 42.3733 15.7867 44.24 19.3867 44.24C23.3867 44.24 26.1333 42.1067 26.1333 37.44V22.0267H21.6V37.3333C21.6 39.6267 20.6667 40.2133 19.2 40.2133C17.6533 40.2133 17.0133 39.1467 16.2933 37.8933L12.6133 40.1067ZM28.56 39.6267C29.8933 42.24 32.5867 44.24 36.8 44.24C41.0667 44.24 44.2667 42.0267 44.2667 37.9467C44.2667 34.1867 42.1067 32.5067 38.2667 30.8533L37.1467 30.3733C35.2 29.5467 34.3733 28.9867 34.3733 27.6533C34.3733 26.56 35.2 25.7067 36.5333 25.7067C37.8133 25.7067 38.6667 26.2667 39.44 27.6533L42.9333 25.3333C41.4667 22.7733 39.3867 21.7867 36.5333 21.7867C32.5067 21.7867 29.92 24.3467 29.92 27.7333C29.92 31.4133 32.08 33.1467 35.3333 34.5333L36.4533 35.0133C38.5333 35.92 39.76 36.48 39.76 38.0267C39.76 39.3067 38.56 40.24 36.6933 40.24C34.48 40.24 33.2 39.0933 32.24 37.4933L28.56 39.6267Z"
                  fill="white"
                />
              </svg>

              <div>
                <h1 className="text-base font-semibold">JavaScript</h1>
                <p className="text-xs">Beginner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
