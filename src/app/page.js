"use client"

import 'react-datepicker/dist/react-datepicker.css';
import city_list from "./state_city";
import { useState } from "react";
export default function Home() {
  let states = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");

  const [visibility, setVisibility] = useState({
    gst_cert: { 0: 'hidden', 1: 'name' },
    pan_numb: { 0: 'hidden', 1: 'name' },
    msme_cert: { 0: 'hidden', 1: 'name' },
    vend_cont: { 0: 'hidden', 1: 'name' },
    lowe_exce: { 0: 'hidden', 1: 'name' },
    lowe_excep: { 0: 'hidden', 1: 'name' },
    vend_fina: { 0: 'hidden', 1: 'name' },
  });

  const changeVisibilityValues = (key, hiddenValue, nameValue) => {
    setVisibility((prevState) => ({
      ...prevState,
      [key]: { 0: hiddenValue, 1: nameValue },
    }));
  };
  
   
  const [city , setCity] =useState([]);
  const find_city =()=>{
    let e= document.getElementById("vendor-state").value;
    let cities = city_list(e);
    setCity(cities);
  }
  const [selectedDate, setSelectedDate] = useState(null);


  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((oldfiles)=>[...oldfiles , ...droppedFiles]);
    console.log(e , droppedFiles);
    if(droppedFiles){
      if(droppedFiles[0]){

        changeVisibilityValues(e.target.id , " " , droppedFiles[0].name ? droppedFiles[0].name : " " );
      }
    }
  };

  const handleFileSelect = (e) => {
    
    const selectedFiles = Array.from(e.target.files);
    setFiles((oldfiles)=>[...oldfiles , ...selectedFiles]);
    if(selectedFiles){
      if(selectedFiles[0]){

        changeVisibilityValues(e.target.id , " " , selectedFiles[0].name ? selectedFiles[0].name : " "  );
      }
    }
  };

  const handleClick = (className) => {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((element) => {
      if (element.tagName === 'INPUT' && element.type === 'file') {
        element.click();
      }
    });
  };
  
  return (
    <>
     

<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-[F7FCFF] dark:bg-gray-800">
      <ul className=" flex flex-col justify-center items-centerspace-y-2 font-medium">
        <li >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <img className="h-[30px] w-[30px]" src="image-logo.png" alt="Company-logo" />
            </a>
         </li>
         
         <li className="py-3">
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2.0625C9.23233 2.0625 7.50436 2.58668 6.0346 3.56874C4.56483 4.55081 3.41929 5.94665 2.74283 7.57977C2.06637 9.21288 1.88938 11.0099 2.23424 12.7436C2.57909 14.4773 3.43031 16.0698 4.68024 17.3198C5.93017 18.5697 7.52268 19.4209 9.25638 19.7658C10.9901 20.1106 12.7871 19.9336 14.4202 19.2572C16.0534 18.5807 17.4492 17.4352 18.4313 15.9654C19.4133 14.4956 19.9375 12.7677 19.9375 11C19.935 8.6304 18.9926 6.35856 17.317 4.683C15.6414 3.00743 13.3696 2.065 11 2.0625ZM11 18.5625C9.50428 18.5625 8.04215 18.119 6.7985 17.288C5.55486 16.457 4.58555 15.2759 4.01317 13.894C3.44078 12.5122 3.29101 10.9916 3.58282 9.52463C3.87462 8.05765 4.59487 6.71014 5.65251 5.65251C6.71014 4.59487 8.05765 3.87461 9.52463 3.58281C10.9916 3.29101 12.5122 3.44077 13.894 4.01316C15.2759 4.58555 16.457 5.55485 17.288 6.7985C18.119 8.04215 18.5625 9.50428 18.5625 11C18.5602 13.005 17.7627 14.9272 16.345 16.345C14.9272 17.7627 13.005 18.5602 11 18.5625ZM14.8173 6.25969L9.31735 9.00969C9.18438 9.07648 9.07649 9.18437 9.00969 9.31734L6.25969 14.8173C6.20722 14.9222 6.18244 15.0387 6.18771 15.1559C6.19297 15.273 6.2281 15.3868 6.28976 15.4866C6.35142 15.5863 6.43756 15.6686 6.54 15.7256C6.64243 15.7827 6.75776 15.8126 6.875 15.8125C6.98173 15.8123 7.087 15.7876 7.18266 15.7403L12.6827 12.9903C12.8156 12.9235 12.9235 12.8156 12.9903 12.6827L15.7403 7.18266C15.8052 7.05352 15.8277 6.90722 15.8047 6.76454C15.7817 6.62186 15.7143 6.49007 15.6121 6.38788C15.5099 6.28569 15.3781 6.2183 15.2355 6.19528C15.0928 6.17227 14.9465 6.19481 14.8173 6.25969ZM11.8594 11.8594L8.41243 13.5876L10.1406 10.1406L13.591 8.41586L11.8594 11.8594Z" fill="#2E5A75"/>
</svg>

              
            </a>
         </li>
         
         
         <li className="py-2">
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            {/* <svg width="36" height="36" viewBox="0 0 45 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 14.5C0 6.49187 6.49187 0 14.5 0H45V29H14.5C6.49187 29 0 22.5081 0 14.5Z" fill="#2E5A75"/>
</svg>          */}
<svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8334 2.75V6.41667C12.8334 6.65978 12.93 6.89294 13.1019 7.06485C13.2738 7.23676 13.5069 7.33333 13.75 7.33333H17.4167" stroke="#F7FCFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.4167 11V17.4167C17.46 17.7626 17.3914 18.1133 17.2209 18.4175C17.0504 18.7216 16.787 18.9631 16.4692 19.1066C16.1515 19.2501 15.7961 19.288 15.4552 19.2149C15.1144 19.1417 14.8059 18.9613 14.575 18.7C14.4335 18.519 14.2527 18.3726 14.0462 18.2719C13.8398 18.1713 13.6131 18.1189 13.3833 18.1189C13.1536 18.1189 12.9269 18.1713 12.7204 18.2719C12.514 18.3726 12.3331 18.519 12.1917 18.7C12.0502 18.881 11.8694 19.0274 11.6629 19.1281C11.4564 19.2287 11.2297 19.2811 11 19.2811C10.7703 19.2811 10.5436 19.2287 10.3371 19.1281C10.1306 19.0274 9.9498 18.881 9.80834 18.7C9.66687 18.519 9.48604 18.3726 9.27956 18.2719C9.07309 18.1713 8.84639 18.1189 8.61667 18.1189C8.38696 18.1189 8.16026 18.1713 7.95378 18.2719C7.7473 18.3726 7.56647 18.519 7.42501 18.7C7.19413 18.9613 6.88565 19.1417 6.54476 19.2149C6.20388 19.288 5.84852 19.2501 5.53078 19.1066C5.21303 18.9631 4.9496 18.7216 4.7791 18.4175C4.6086 18.1133 4.53999 17.7626 4.58334 17.4167V4.58333C4.58334 4.0971 4.77649 3.63079 5.12031 3.28697C5.46413 2.94315 5.93044 2.75 6.41667 2.75H12.8333L17.4167 7.33333V11.2292" stroke="#2E5A75" strokeWidth="2" fill="#F7FCFF" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


            </a>
         </li>
         
         <li className="py-2">
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_72)">
<path d="M15.0938 15.0938V17.0625H5.57812C4.79491 17.0625 4.04377 16.7514 3.48995 16.1975C2.93613 15.6437 2.625 14.8926 2.625 14.1094C2.625 13.3262 2.93613 12.575 3.48995 12.0212C4.04377 11.4674 4.79491 11.1562 5.57812 11.1562H5.90625V9.84375H5.57812C4.44681 9.84375 3.36183 10.2932 2.56187 11.0931C1.76191 11.8931 1.3125 12.9781 1.3125 14.1094C1.3125 15.2407 1.76191 16.3257 2.56187 17.1256C3.36183 17.9256 4.44681 18.375 5.57812 18.375H15.0938V20.3438H20.3438V15.0938H15.0938ZM19.0312 19.0312H16.4062V16.4062H19.0312V19.0312Z" fill="#2E5A75"/>
<path d="M13.7812 14.4375H12.4688V12.4688H8.53125V14.4375H7.21875V12.4688C7.2191 12.1208 7.35749 11.7871 7.60356 11.5411C7.84962 11.295 8.18326 11.1566 8.53125 11.1563H12.4688C12.8167 11.1566 13.1504 11.295 13.3964 11.5411C13.6425 11.7871 13.7809 12.1208 13.7812 12.4688V14.4375ZM10.5 10.5C10.1106 10.5 9.72998 10.3845 9.40622 10.1682C9.08246 9.95188 8.83012 9.6444 8.68111 9.28466C8.5321 8.92492 8.49311 8.52907 8.56908 8.14717C8.64504 7.76527 8.83255 7.41447 9.10788 7.13913C9.38322 6.8638 9.73402 6.67629 10.1159 6.60033C10.4978 6.52437 10.8937 6.56335 11.2534 6.71236C11.6132 6.86137 11.9206 7.11371 12.137 7.43747C12.3533 7.76123 12.4688 8.14187 12.4688 8.53125C12.4682 9.05324 12.2606 9.55369 11.8915 9.92279C11.5224 10.2919 11.022 10.4995 10.5 10.5ZM10.5 7.875C10.3702 7.875 10.2433 7.91349 10.1354 7.9856C10.0275 8.05771 9.94337 8.1602 9.8937 8.28012C9.84403 8.40003 9.83104 8.53198 9.85636 8.65928C9.88168 8.78658 9.94418 8.90351 10.036 8.99529C10.1277 9.08707 10.2447 9.14957 10.372 9.17489C10.4993 9.20021 10.6312 9.18722 10.7511 9.13755C10.871 9.08788 10.9735 9.00376 11.0457 8.89584C11.1178 8.78792 11.1562 8.66105 11.1562 8.53125C11.1561 8.35726 11.0869 8.19044 10.9638 8.0674C10.8408 7.94437 10.674 7.87517 10.5 7.875Z" fill="#2E5A75"/>
<path d="M15.4219 2.625H5.90625V0.65625H0.65625V5.90625H5.90625V3.9375H15.4219C16.2051 3.9375 16.9562 4.24863 17.51 4.80245C18.0639 5.35627 18.375 6.10741 18.375 6.89062C18.375 7.67384 18.0639 8.42498 17.51 8.9788C16.9562 9.53262 16.2051 9.84375 15.4219 9.84375H15.0938V11.1562H15.4219C16.5532 11.1562 17.6382 10.7068 18.4381 9.90688C19.2381 9.10692 19.6875 8.02194 19.6875 6.89062C19.6875 5.75931 19.2381 4.67433 18.4381 3.87437C17.6382 3.07441 16.5532 2.625 15.4219 2.625ZM4.59375 4.59375H1.96875V1.96875H4.59375V4.59375Z" fill="#2E5A75"/>
</g>
<defs>
<clipPath id="clip0_1_72">
<rect width="21" height="21" fill="white"/>
</clipPath>
</defs>
</svg>

            </a>
         </li>
         <li className="py-2">
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.03437 3.77738C9.40712 2.24087 11.5929 2.24087 11.9656 3.77738C12.0216 4.0082 12.1312 4.22256 12.2856 4.403C12.4401 4.58344 12.6349 4.72487 12.8543 4.81578C13.0737 4.90668 13.3115 4.94449 13.5483 4.92614C13.7851 4.90778 14.0142 4.83376 14.217 4.71012C15.5671 3.88762 17.1133 5.43287 16.2908 6.78387C16.1673 6.98657 16.0934 7.21554 16.0751 7.45218C16.0568 7.68881 16.0945 7.92642 16.1853 8.14571C16.2761 8.36499 16.4174 8.55976 16.5976 8.71417C16.7779 8.86859 16.992 8.97829 17.2226 9.03437C18.7591 9.40712 18.7591 11.5929 17.2226 11.9656C16.9918 12.0216 16.7774 12.1312 16.597 12.2856C16.4166 12.4401 16.2751 12.6349 16.1842 12.8543C16.0933 13.0737 16.0555 13.3115 16.0739 13.5483C16.0922 13.7851 16.1662 14.0142 16.2899 14.217C17.1124 15.5671 15.5671 17.1133 14.2161 16.2908C14.0134 16.1673 13.7845 16.0934 13.5478 16.0751C13.3112 16.0568 13.0736 16.0945 12.8543 16.1853C12.635 16.2761 12.4402 16.4174 12.2858 16.5976C12.1314 16.7779 12.0217 16.992 11.9656 17.2226C11.5929 18.7591 9.40712 18.7591 9.03437 17.2226C8.97845 16.9918 8.86881 16.7774 8.71438 16.597C8.55995 16.4166 8.3651 16.2751 8.14568 16.1842C7.92626 16.0933 7.68848 16.0555 7.45169 16.0739C7.21489 16.0922 6.98578 16.1662 6.783 16.2899C5.43287 17.1124 3.88675 15.5671 4.70925 14.2161C4.83271 14.0134 4.90661 13.7845 4.92492 13.5478C4.94324 13.3112 4.90546 13.0736 4.81466 12.8543C4.72386 12.635 4.5826 12.4402 4.40236 12.2858C4.22212 12.1314 4.00799 12.0217 3.77738 11.9656C2.24087 11.5929 2.24087 9.40712 3.77738 9.03437C4.0082 8.97845 4.22256 8.86881 4.403 8.71438C4.58344 8.55995 4.72487 8.3651 4.81578 8.14568C4.90668 7.92626 4.94449 7.68848 4.92614 7.45169C4.90778 7.21489 4.83376 6.98578 4.71012 6.783C3.88762 5.43287 5.43287 3.88675 6.78387 4.70925C7.65887 5.24125 8.79287 4.7705 9.03437 3.77738Z" stroke="#2E5A75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.875 10.5C7.875 11.1962 8.15156 11.8639 8.64384 12.3562C9.13613 12.8484 9.80381 13.125 10.5 13.125C11.1962 13.125 11.8639 12.8484 12.3562 12.3562C12.8484 11.8639 13.125 11.1962 13.125 10.5C13.125 9.80381 12.8484 9.13613 12.3562 8.64384C11.8639 8.15156 11.1962 7.875 10.5 7.875C9.80381 7.875 9.13613 8.15156 8.64384 8.64384C8.15156 9.13613 7.875 9.80381 7.875 10.5Z" stroke="#2E5A75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

               
            </a>
         </li>
         
      </ul>
   </div>
</aside>

<header className="sm:ml-20 mt-3">
  <div className="flex justify-between items-center">
  <span className="font-bold text-2xl ml-10">Manage Vendor</span>
  <div className="flex justify-end items-center">
  <div className="mr-2 ml-2">
  <button className="border-[1px]  border-[#e2dfdf] text-gray-800 rounded-full flex items-center justify-center w-10 h-10">
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_88)">
<path fillRule="evenodd" clipRule="evenodd" d="M5.20834 9.37501C5.20834 7.44114 5.97657 5.58648 7.34402 4.21902C8.71147 2.85157 10.5661 2.08334 12.5 2.08334C14.4339 2.08334 16.2885 2.85157 17.656 4.21902C19.0234 5.58648 19.7917 7.44114 19.7917 9.37501V13.2958L21.6896 17.0917C21.777 17.2664 21.8182 17.4605 21.8094 17.6557C21.8007 17.8508 21.7421 18.0405 21.6394 18.2066C21.5367 18.3728 21.3933 18.5099 21.2226 18.605C21.052 18.7001 20.8599 18.75 20.6646 18.75H16.5354C16.3037 19.644 15.7817 20.4358 15.0513 21.001C14.3209 21.5662 13.4235 21.8729 12.5 21.8729C11.5765 21.8729 10.6791 21.5662 9.94869 21.001C9.21831 20.4358 8.6963 19.644 8.46459 18.75H4.33543C4.14009 18.75 3.94799 18.7001 3.77737 18.605C3.60675 18.5099 3.46328 18.3728 3.36058 18.2066C3.25788 18.0405 3.19936 17.8508 3.19058 17.6557C3.1818 17.4605 3.22306 17.2664 3.31043 17.0917L5.20834 13.2958V9.37501ZM10.6958 18.75C10.8787 19.0667 11.1417 19.3297 11.4584 19.5125C11.7751 19.6953 12.1343 19.7916 12.5 19.7916C12.8657 19.7916 13.2249 19.6953 13.5416 19.5125C13.8583 19.3297 14.1213 19.0667 14.3042 18.75H10.6958ZM12.5 4.16668C11.1187 4.16668 9.79391 4.71541 8.81716 5.69216C7.84041 6.66891 7.29168 7.99367 7.29168 9.37501V13.2958C7.29165 13.6191 7.2164 13.9379 7.07188 14.2271L5.85313 16.6667H19.1479L17.9292 14.2271C17.7843 13.938 17.7087 13.6192 17.7083 13.2958V9.37501C17.7083 7.99367 17.1596 6.66891 16.1829 5.69216C15.2061 4.71541 13.8813 4.16668 12.5 4.16668Z" fill="black" fillOpacity="0.6"/>
<circle cx="18" cy="4" r="4" fill="#ED0505"/>
</g>
<defs>
<clipPath id="clip0_1_88">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
</svg>

  </button>
  </div>
  <span className="text-lg text-[#e2dfdf] mr-2 ml-2 ">|</span>
  <div className="flex items-center mr-10">
    <img className="h-10 w-10 rounded-full mr-2" src="image.png" alt="Profile Pic" />  
    <div>
    <div className="text-sm font-semibold">Rohit Sharma</div>
    <div className="text-xs">rohit.sharma@growquest.in</div> 
    </div>
  </div>
  </div>
  </div>
</header>
<hr className="mt-3 sm:ml-20" />

<main className="sm:ml-20">
<div className="h-14 flex justify-between items-center">
<div className=" flex justify-center items-center">
<button className="ml-8 mr-4">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1411 6.48668L4.66663 14L12.1411 21.5133C12.2086 21.602 12.2943 21.6751 12.3926 21.7277C12.4908 21.7803 12.5991 21.8112 12.7103 21.8183C12.8215 21.8254 12.933 21.8086 13.0371 21.7688C13.1412 21.7291 13.2355 21.6675 13.3137 21.5882C13.392 21.5088 13.4522 21.4136 13.4904 21.3089C13.5287 21.2043 13.544 21.0926 13.5353 20.9815C13.5266 20.8704 13.4941 20.7625 13.4401 20.6651C13.3861 20.5676 13.3118 20.4829 13.2222 20.4167L7.62996 14.7778L22.5088 14.7778C22.7151 14.7778 22.913 14.6958 23.0588 14.55C23.2047 14.4041 23.2866 14.2063 23.2866 14C23.2866 13.7937 23.2047 13.5959 23.0588 13.45C22.913 13.3042 22.7151 13.2222 22.5088 13.2222L7.62996 13.2222L13.2222 7.58335C13.3676 7.43689 13.4489 7.23866 13.4482 7.03226C13.4474 6.82587 13.3648 6.62822 13.2183 6.48279C13.0718 6.33736 12.8736 6.25607 12.6672 6.2568C12.4608 6.25753 12.2632 6.34022 12.1177 6.48668L12.1411 6.48668Z" fill="black"/>
</svg>

</button>

<span className="font-bold">OlaMoney Technologies India Pvt Ltd</span>
<span className="border-2 rounded-full font-semibold ml-6 mr-3 text-center items-center border-[#5E4CFE] text-[#5E4CFE] text-[10px] p-2 pl-3 pr-3">Awaited Business Approval</span>

<button className="ml-6 mr-6">
<svg
      viewBox="0 0 24 22"
      fill="currentColor"
      height="24"
      width="24"
      
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
    </svg>

</button>
<button className="mr-6">
<svg fill="none" viewBox="0 0 24 24" height="22" width="22" >
      <path
        fill="currentColor"
        d="M6 6a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM6 10a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM7 13a1 1 0 100 2h10a1 1 0 100-2H7zM6 18a1 1 0 011-1h4a1 1 0 110 2H7a1 1 0 01-1-1z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 4a3 3 0 013-3h14a3 3 0 013 3v16a3 3 0 01-3 3H5a3 3 0 01-3-3V4zm3-1h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
</button>
<button className="mr-6">
<svg fill="none" viewBox="0 0 15 15" height="22" width="22">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.15 7.5c0-2.835-2.21-5.65-5.65-5.65-2.778 0-4.152 2.056-4.737 3.15H4.5a.5.5 0 010 1h-3a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.813C2.705 3.071 4.334.85 7.5.85c4.063 0 6.65 3.335 6.65 6.65 0 3.315-2.587 6.65-6.65 6.65-1.944 0-3.562-.77-4.715-1.942a6.772 6.772 0 01-1.427-2.167.5.5 0 11.925-.38c.28.681.692 1.314 1.216 1.846.972.99 2.336 1.643 4.001 1.643 3.44 0 5.65-2.815 5.65-5.65zM7.5 4a.5.5 0 01.5.5v2.793l1.854 1.853a.5.5 0 01-.708.708l-2-2A.5.5 0 017 7.5v-3a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
    </svg>
</button>
<button className="mr-6">
<svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="22"
      width="22"
    >
      <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z" />
    </svg>
</button>
<button className="mr-6">
<svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="22"
      width="22"
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
</button>
<button className="mr-6">
<svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="22"
      width="22"
    >
      <path
        fillRule="evenodd"
        d="M14.854 4.854a.5.5 0 000-.708l-4-4a.5.5 0 00-.708.708L13.293 4H3.5A2.5 2.5 0 001 6.5v8a.5.5 0 001 0v-8A1.5 1.5 0 013.5 5h9.793l-3.147 3.146a.5.5 0 00.708.708l4-4z"
      />
    </svg>
  
</button>
</div>
<div className="flex"> 
<button className="flex rounded-md text-sm font-bold bg-[#F5FAF4] p-1 pl-2 pr-2 mr-4 ml-2 text-[#0A920A] ">
    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.19375 8.41875L7.125 7.35C7.05 7.275 6.96875 7.21875 6.88125 7.18125C6.79375 7.14375 6.703 7.125 6.609 7.125C6.515 7.125 6.4215 7.14375 6.3285 7.18125C6.2355 7.21875 6.151 7.275 6.075 7.35C5.9375 7.4875 5.86875 7.6625 5.86875 7.875C5.86875 8.0875 5.9375 8.2625 6.075 8.4L7.66875 10.0125C7.81875 10.1625 7.99375 10.2375 8.19375 10.2375C8.39375 10.2375 8.56875 10.1625 8.71875 10.0125L12.2063 6.825C12.2063 6.625 12.1938 6.43125 12.1688 6.24375C12.1438 6.05625 12.0625 5.89375 11.925 5.75625C11.775 5.60625 11.5968 5.53125 11.3903 5.53125C11.1838 5.53125 11.0058 5.60625 10.8563 5.75625L8.19375 8.41875ZM0.75 15.75V14.25H16.5C16.7125 14.25 16.8908 14.322 17.0347 14.466C17.1788 14.61 17.2505 14.788 17.25 15C17.2495 15.212 17.1775 15.3902 17.034 15.5347C16.8905 15.6792 16.7125 15.751 16.5 15.75H0.75ZM3 13.5C2.5875 13.5 2.2345 13.3533 1.941 13.0597C1.6475 12.7662 1.5005 12.413 1.5 12V3.75C1.5 3.3375 1.647 2.9845 1.941 2.691C2.235 2.3975 2.588 2.2505 3 2.25H15C15.4125 2.25 15.7658 2.397 16.0598 2.691C16.3538 2.985 16.5005 3.338 16.5 3.75V12C16.5 12.4125 16.3533 12.7657 16.0598 13.0597C15.7663 13.3538 15.413 13.5005 15 13.5H3ZM3 12H15V3.75H3V12Z" fill="#0A920A"/>
    </svg>
    &nbsp;&nbsp;Save Draft
</button>

  <button className="rounded-md p-1 pl-2 pr-2 font-bold text-sm sm:mr-10 lg:mr-16 text-white bg-[#017194]">Submit  &nbsp;&nbsp; &gt;</button>
</div>
</div>

<div className="flex ">
{/* scrollable div */}
<div className="ml-8 p-1 basis-5/6 mr-4 rounded-md border-[1px] ">
<ul className="flex ">
  <li className="mx-3 font-bold text-[#2E5A75]/60"><a href="#">Vendor request details</a></li>
  <li className="mx-3 font-bold text-[#2E5A75]"><a href="#">Vendor form details</a></li>
  <li className="mx-3 font-bold text-[#000000]/20"><a href="#">Add finance details</a></li>
</ul>
<hr className="-mr-1 -ml-1 mt-1" />
<div className="overscroll-auto px-4 sm:px-6 md:px-0 overflow-y-auto overflow-x-hidden custom-scrollbar max-h-[550px]">

  {/* Business Details */}
  <div className="flex items-center mt-4">
  <span className="ml-3"><svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1.5" y1="-6.55671e-08" x2="1.5" y2="13" stroke="#ED0505" strokeWidth="3"/>
</svg></span><span className="ml-2 font-bold">Business Details</span>
  </div>

<form action="">
<div className="grid grid-cols-5  gap-8 mt-4">

<div className=" ml-4 rounded-md p-1 pl-2 pr-2">
<label htmlFor="vendor-id" className="block text-sm font-medium leading-6 text-gray-900">Vendor ID</label>
          <div className="mt-2">
            <input type="text" name="vendor-id" id="vendor-id" autoComplete="id" className="bg-[#EBF5FF]/50 block min-h-9 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-[#EBF5FF]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#EBF5FF]/50 sm:text-sm sm:leading-6" value={"AMZ2034566"} readOnly/>
          </div>
</div>
<div className=" rounded-md p-1 pl-2 pr-2">
<label htmlFor="legal-name" className="block text-sm font-medium leading-6 text-gray-900">Legal Name*</label>
          <div className="mt-2">
            <input type="text" name="legal-name" id="legal-name" autoComplete="Company" className="block min-h-9 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6" required/>
          </div>
</div>
<div className=" rounded-md p-1 pl-2 pr-2">
<label htmlFor="trade-name" className="block text-sm font-medium leading-6 text-gray-900">Trade Name*</label>
          <div className="mt-2">
            <input type="text" name="trade-name" id="trade-name" autoComplete="Company" className="block min-h-9 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6" required/>
          </div>
</div>
<div className=" rounded-md p-1 pl-2 pr-2">
<label htmlFor="vendor-state" className="block text-sm font-medium leading-6 text-gray-900">Vendor State*</label>
          <div className="mt-2">
            <select id="vendor-state" name="vendor-state" autoComplete="state" className="block w-full min-h-9 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6" onChange={find_city}>
              {
                states.map((state)=>{
                  
                  return(<option key={state}>{state}</option>)
                })
              }

            </select>
          </div>
</div>
<div className=" mr-4 rounded-md p-1 pl-2 pr-2">
<label htmlFor="vendor-location" className="block text-sm font-medium leading-6 text-gray-900">Vendor Location*</label>
          <div className="mt-2">
            <select id="vendor-location" name="vendor-location" autoComplete="city" className="block w-full min-h-9 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6">
            {
                city.map((city)=>{
                  
                  return(<option key={city}>{city}</option>)
                })
              }
            </select>
          </div>
</div>
<div className=" ml-4 rounded-md p-1 pl-2 pr-2">
<label className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
  <span className="text-sm font-medium text-gray-900 dark:text-gray-300">GST Registered</span>
  <div className="mt-4">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600  peer-checked:bg-[#5AB860]">
  </div>
  </div>
  
</label>
</div>
<div className=" rounded-md p-1 pl-2 pr-2">
<label htmlFor="gst-certificate" className="block text-sm font-medium leading-6 text-gray-900">GST Certificate*</label>
          <div className="mt-2">
        <label htmlFor="g" className="cursor-pointer">
          <div
            id="gst_cert"
            className={`flex min-h-9 flex-col items-center justify-center rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-[#017194]/20  ${dragging ? 'border-gray-400 bg-[#2E5A75]' : 'border-gray-300 bg-[#EBF5FF] hover:bg-[#EBF5FF]/50'}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => handleClick('gst_cert')}
          >
            <div className="flex justify-center items-center">
            <span className="text-xs text-[#2E5A75]">Browse or drop files &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="">
              <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.6L3 6.6L3.84 7.44L5.4 5.895L5.4 12H6.6L6.6 5.895L8.16 7.44L9 6.6L6 3.6ZM0.99 9.3C0.67 8.81 0.425 8.285 0.255 7.725C0.085 7.165 0 6.59 0 6C0 5.17 0.1576 4.39 0.4728 3.66C0.788 2.93 1.2154 2.295 1.755 1.755C2.295 1.215 2.93 0.7876 3.66 0.4728C4.39 0.158 5.17 0.0004 6 0C6.83 0 7.61 0.1576 8.34 0.4728C9.07 0.788 9.705 1.2154 10.245 1.755C10.785 2.295 11.2126 2.93 11.5278 3.66C11.843 4.39 12.0004 5.17 12 6C12 6.59 11.915 7.165 11.745 7.725C11.575 8.285 11.33 8.81 11.01 9.3L10.14 8.43C10.36 8.06 10.525 7.67 10.635 7.26C10.745 6.85 10.8 6.43 10.8 6C10.8 4.66 10.335 3.525 9.405 2.595C8.475 1.665 7.34 1.2 6 1.2C4.66 1.2 3.525 1.665 2.595 2.595C1.665 3.525 1.2 4.66 1.2 6C1.2 6.43 1.255 6.85 1.365 7.26C1.475 7.67 1.64 8.06 1.86 8.43L0.99 9.3Z" fill="#2E5A75"/>
            </svg>
            </span>
            </div>

          </div>
        </label>
        <input
          id='gst_cert'
          type="file"
          className="hidden gst_cert"
          onChange={handleFileSelect}
        />
      </div>


            
         
</div>
<div className=" rounded-md p-1 pl-2 pr-2">
  <label htmlFor="payment-terms" className="block text-sm font-medium leading-6 text-gray-900">Payment Terms</label>
          <div className="mt-2">
            <input type="text" name="payment-terms" id="payment-terms" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-black min-h-9 shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6"/>
          </div>
</div>
<div className=" rounded-md p-1 pl-2 pr-2">
<label htmlFor="pan-attachment" className="block text-sm font-medium leading-6 text-gray-900">PAN Attachment*</label>
<div className="mt-2">
        <label htmlFor="sd" className="cursor-pointer">
          <div
            id="pan_numb"
            className={`flex min-h-9 flex-col items-center justify-center rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-[#017194]/20  ${dragging ? 'border-gray-400 bg-[#2E5A75]' : 'border-gray-300 bg-[#EBF5FF] hover:bg-[#EBF5FF]/50'}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => handleClick('pan_numb')}
          >
            <div className="flex justify-center items-center">
            <span className="text-xs text-[#2E5A75]">Browse or drop files &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="">
              <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.6L3 6.6L3.84 7.44L5.4 5.895L5.4 12H6.6L6.6 5.895L8.16 7.44L9 6.6L6 3.6ZM0.99 9.3C0.67 8.81 0.425 8.285 0.255 7.725C0.085 7.165 0 6.59 0 6C0 5.17 0.1576 4.39 0.4728 3.66C0.788 2.93 1.2154 2.295 1.755 1.755C2.295 1.215 2.93 0.7876 3.66 0.4728C4.39 0.158 5.17 0.0004 6 0C6.83 0 7.61 0.1576 8.34 0.4728C9.07 0.788 9.705 1.2154 10.245 1.755C10.785 2.295 11.2126 2.93 11.5278 3.66C11.843 4.39 12.0004 5.17 12 6C12 6.59 11.915 7.165 11.745 7.725C11.575 8.285 11.33 8.81 11.01 9.3L10.14 8.43C10.36 8.06 10.525 7.67 10.635 7.26C10.745 6.85 10.8 6.43 10.8 6C10.8 4.66 10.335 3.525 9.405 2.595C8.475 1.665 7.34 1.2 6 1.2C4.66 1.2 3.525 1.665 2.595 2.595C1.665 3.525 1.2 4.66 1.2 6C1.2 6.43 1.255 6.85 1.365 7.26C1.475 7.67 1.64 8.06 1.86 8.43L0.99 9.3Z" fill="#2E5A75"/>
            </svg>
            </span>
            </div>

          </div>
        </label>
        <input
          id="pan_numb"
          type="file"
          className="hidden pan_numb"
          onChange={handleFileSelect}
        />
      </div>
</div>
<div className=" mr-4 rounded-md p-1 pl-2 pr-2">
<label htmlFor="policy" className="block text-sm font-medium leading-6 text-gray-900">Policy*</label>
          <div className="mt-2">
            <select id="policy" name="policy" autoComplete="policy" className="block w-full min-h-9 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6">
              <option>Marketing All</option>
              <option>Ecommerce</option>
              <option>Other</option>
            </select>
          </div>
</div>
<div className=" ml-4 rounded-md p-1 pl-2 pr-2 col-span-2">
<label htmlFor="vendor-address" className="block text-sm font-medium leading-6 text-gray-900">Vendor address</label>
          <div className="mt-2">
            <input type="text" name="vendor-address" id="vendor-address" autoComplete="address-level2" className="block min-h-9 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6"/>
          </div>
</div>
</div>
</form>


<hr className="-mr-1 -ml-1 mt-8 mb-8" />

{/* MSME Details */}
<div className="flex items-center mt-4">
  <span className="ml-3"><svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1.5" y1="-6.55671e-08" x2="1.5" y2="13" stroke="#ED0505" strokeWidth="3"/>
</svg></span><span className="ml-2 font-bold">MSME Details</span>
  </div>

<form action="">
<div className="grid grid-cols-5  gap-8 mt-4">

<div className=" ml-4 rounded-md p-1 pl-2 pr-2">
<label className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
  <span className="text-sm font-medium text-gray-900 dark:text-gray-300">MSME Registered</span>
  <div className="mt-4">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600  peer-checked:bg-[#5AB860]">
  </div>
  </div>
  
</label>
</div>
<div className=" rounded-md p-1 pl-2 pr-2">
<label htmlFor="gst-certificate" className="block text-sm font-medium leading-6 text-gray-900">MSME Attachment*</label>
          <div className="mt-2">
        <label htmlFor="msme" className="cursor-pointer">
          <div
            id="msme_cert"
            className={`flex min-h-9 flex-col items-center justify-center rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-[#017194]/20  ${dragging ? 'border-gray-400 bg-[#2E5A75]' : 'border-gray-300 bg-[#EBF5FF] hover:bg-[#EBF5FF]/50'}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => handleClick('msme_cert')}
          >
            <div className="flex justify-center items-center">
            <span className="text-xs text-[#2E5A75]">Browse or drop files &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="">
              <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.6L3 6.6L3.84 7.44L5.4 5.895L5.4 12H6.6L6.6 5.895L8.16 7.44L9 6.6L6 3.6ZM0.99 9.3C0.67 8.81 0.425 8.285 0.255 7.725C0.085 7.165 0 6.59 0 6C0 5.17 0.1576 4.39 0.4728 3.66C0.788 2.93 1.2154 2.295 1.755 1.755C2.295 1.215 2.93 0.7876 3.66 0.4728C4.39 0.158 5.17 0.0004 6 0C6.83 0 7.61 0.1576 8.34 0.4728C9.07 0.788 9.705 1.2154 10.245 1.755C10.785 2.295 11.2126 2.93 11.5278 3.66C11.843 4.39 12.0004 5.17 12 6C12 6.59 11.915 7.165 11.745 7.725C11.575 8.285 11.33 8.81 11.01 9.3L10.14 8.43C10.36 8.06 10.525 7.67 10.635 7.26C10.745 6.85 10.8 6.43 10.8 6C10.8 4.66 10.335 3.525 9.405 2.595C8.475 1.665 7.34 1.2 6 1.2C4.66 1.2 3.525 1.665 2.595 2.595C1.665 3.525 1.2 4.66 1.2 6C1.2 6.43 1.255 6.85 1.365 7.26C1.475 7.67 1.64 8.06 1.86 8.43L0.99 9.3Z" fill="#2E5A75"/>
            </svg>
            </span>
            </div>

          </div>
        </label>
        <input
          id="msme_cert"
          type="file"
          className="hidden msme_cert"
          
          onChange={handleFileSelect}
        />
      </div>

</div>
<div className=" rounded-md p-1 pl-2 pr-2">
<label className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
  <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Lower Exception</span>
  <div className="mt-4">
  <input id="ldc-exception" type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600  peer-checked:bg-[#5AB860]">
  </div>
  </div>
  
</label>
</div>
<div className=" rounded-md p-1 pl-2 pr-2">
<label htmlFor="gst-certificate" className="block text-sm font-medium leading-6 text-gray-900">Lower exception certificate</label>
          <div className="mt-2">
        <label htmlFor="lower-exception-certificate" className="cursor-pointer">
          <div
            id="lowe_exce"
            className={`flex min-h-9 flex-col items-center justify-center rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-[#017194]/20  ${dragging ? 'border-gray-400 bg-[#2E5A75]' : 'border-gray-300 bg-[#EBF5FF] hover:bg-[#EBF5FF]/50'}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => handleClick('lowe_exce')}
          >
            <div className="flex justify-center items-center">
            <span className="text-xs text-[#2E5A75]">Browse or drop files &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="">
              <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.6L3 6.6L3.84 7.44L5.4 5.895L5.4 12H6.6L6.6 5.895L8.16 7.44L9 6.6L6 3.6ZM0.99 9.3C0.67 8.81 0.425 8.285 0.255 7.725C0.085 7.165 0 6.59 0 6C0 5.17 0.1576 4.39 0.4728 3.66C0.788 2.93 1.2154 2.295 1.755 1.755C2.295 1.215 2.93 0.7876 3.66 0.4728C4.39 0.158 5.17 0.0004 6 0C6.83 0 7.61 0.1576 8.34 0.4728C9.07 0.788 9.705 1.2154 10.245 1.755C10.785 2.295 11.2126 2.93 11.5278 3.66C11.843 4.39 12.0004 5.17 12 6C12 6.59 11.915 7.165 11.745 7.725C11.575 8.285 11.33 8.81 11.01 9.3L10.14 8.43C10.36 8.06 10.525 7.67 10.635 7.26C10.745 6.85 10.8 6.43 10.8 6C10.8 4.66 10.335 3.525 9.405 2.595C8.475 1.665 7.34 1.2 6 1.2C4.66 1.2 3.525 1.665 2.595 2.595C1.665 3.525 1.2 4.66 1.2 6C1.2 6.43 1.255 6.85 1.365 7.26C1.475 7.67 1.64 8.06 1.86 8.43L0.99 9.3Z" fill="#2E5A75"/>
            </svg>
            </span>
            </div>

          </div>
        </label>
        <input
          id="lowe_exce"
          type="file"
          className="hidden lowe_exce"
          
          onChange={handleFileSelect}
        />
      </div>

</div>
<div className=" mr-4 rounded-md p-1 pl-2 pr-2">
<label htmlFor="payment-terms" className="block text-sm font-medium leading-6 text-gray-900">LDC Upper Limit</label>
          <div className="mt-2">
            <input type="text" name="ldc" id="ldc" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-black min-h-9 shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6"/>
          </div>
</div>


<div className="rounded-md p-1 pl-2 pr-2">
  <label htmlFor="gst-certificate" className="block text-sm font-medium leading-6 text-gray-900">LDC Start Date*</label>
  
  <div className="mt-2 ">
  <input id="ldc-start-date" className="block w-full rounded-md border-0 py-1.5 text-black min-h-9 shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6 date" type="date" placeholder="Date and Time"/>
  </div> 
  
</div>


<div className="rounded-md p-1 pl-2 pr-2">
  <label htmlFor="gst-certificate" className="block text-sm font-medium leading-6 text-gray-900">LDC End Date*</label>
  
  <div className="mt-2 ">
  <input id="ldc-end-date" className="block w-full rounded-md border-0 py-1.5 text-black min-h-9 shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6 date" type="date" placeholder="Date and Time"/>
  </div> 
  
</div>


<div className="col-start-4 rounded-md p-1 pl-2 pr-2">
<label htmlFor="gst-certificate" className="block text-sm font-medium leading-6 text-gray-900">Lower exception certificate</label>
          <div className="mt-2">
        <label htmlFor="ldc-except" className="cursor-pointer">
          <div
            id="lowe_excep"
            className={`flex min-h-9 flex-col items-center justify-center rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-[#017194]/20  ${dragging ? 'border-gray-400 bg-[#2E5A75]' : 'border-gray-300 bg-[#EBF5FF] hover:bg-[#EBF5FF]/50'}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => handleClick('lowe_excep')}
          >
            <div className="flex justify-center items-center">
            <span className="text-xs text-[#2E5A75]">Browse or drop files &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="">
              <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.6L3 6.6L3.84 7.44L5.4 5.895L5.4 12H6.6L6.6 5.895L8.16 7.44L9 6.6L6 3.6ZM0.99 9.3C0.67 8.81 0.425 8.285 0.255 7.725C0.085 7.165 0 6.59 0 6C0 5.17 0.1576 4.39 0.4728 3.66C0.788 2.93 1.2154 2.295 1.755 1.755C2.295 1.215 2.93 0.7876 3.66 0.4728C4.39 0.158 5.17 0.0004 6 0C6.83 0 7.61 0.1576 8.34 0.4728C9.07 0.788 9.705 1.2154 10.245 1.755C10.785 2.295 11.2126 2.93 11.5278 3.66C11.843 4.39 12.0004 5.17 12 6C12 6.59 11.915 7.165 11.745 7.725C11.575 8.285 11.33 8.81 11.01 9.3L10.14 8.43C10.36 8.06 10.525 7.67 10.635 7.26C10.745 6.85 10.8 6.43 10.8 6C10.8 4.66 10.335 3.525 9.405 2.595C8.475 1.665 7.34 1.2 6 1.2C4.66 1.2 3.525 1.665 2.595 2.595C1.665 3.525 1.2 4.66 1.2 6C1.2 6.43 1.255 6.85 1.365 7.26C1.475 7.67 1.64 8.06 1.86 8.43L0.99 9.3Z" fill="#2E5A75"/>
            </svg>
            </span>
            </div>

          </div>
        </label>
        <input
          id="lowe_excep"
          type="file"
          className="hidden lowe_excep"
          
          onChange={handleFileSelect}
        />
      </div>


            
         
</div>
<div className=" rounded-md p-1 pl-2 pr-2 mr-4">
  <label htmlFor="payment-terms" className="block text-sm font-medium leading-6 text-gray-900">PAN Number</label>
          <div className="mt-2">
            <input type="text" name="pan-number" id="pan-number" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-black min-h-9 shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6"/>
          </div>
</div>


</div>
</form>



<hr className="-mr-1 -ml-1 mt-8 mb-8" />

{/* Additional Location for Supply*/}
<div className="flex items-center mt-4">
  <span className="ml-3"><svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1.5" y1="-6.55671e-08" x2="1.5" y2="13" stroke="#ED0505" strokeWidth="3"/>
</svg></span><span className="ml-2 font-bold">Additional Location for Supply</span>
  </div>


<form action="">
<div className="grid grid-cols-5  gap-8 mt-4">

<div className=" ml-4 rounded-md p-1 pl-2 pr-2">
<label className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
  <span className="text-sm font-medium text-gray-900 dark:text-gray-300">MSME Registered</span>
  <div className="mt-4">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600  peer-checked:bg-[#5AB860]">
  </div>
  </div>
  
</label>
</div>
<div className=" rounded-md p-1 pl-2 pr-2">
<label htmlFor="gst-certificate" className="block text-sm font-medium leading-6 text-gray-900">MSME Attachment*</label>
          <div className="mt-2">
        <label htmlFor="msme" className="cursor-pointer">
          <div
            id="msme"
            className={`flex min-h-9 flex-col items-center justify-center rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-[#017194]/20  ${dragging ? 'border-gray-400 bg-[#2E5A75]' : 'border-gray-300 bg-[#EBF5FF] hover:bg-[#EBF5FF]/50'}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-upload').click()}
          >
            <div className="flex justify-center items-center">
            <span className="text-xs text-[#2E5A75]">Browse or drop files &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="">
              <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.6L3 6.6L3.84 7.44L5.4 5.895L5.4 12H6.6L6.6 5.895L8.16 7.44L9 6.6L6 3.6ZM0.99 9.3C0.67 8.81 0.425 8.285 0.255 7.725C0.085 7.165 0 6.59 0 6C0 5.17 0.1576 4.39 0.4728 3.66C0.788 2.93 1.2154 2.295 1.755 1.755C2.295 1.215 2.93 0.7876 3.66 0.4728C4.39 0.158 5.17 0.0004 6 0C6.83 0 7.61 0.1576 8.34 0.4728C9.07 0.788 9.705 1.2154 10.245 1.755C10.785 2.295 11.2126 2.93 11.5278 3.66C11.843 4.39 12.0004 5.17 12 6C12 6.59 11.915 7.165 11.745 7.725C11.575 8.285 11.33 8.81 11.01 9.3L10.14 8.43C10.36 8.06 10.525 7.67 10.635 7.26C10.745 6.85 10.8 6.43 10.8 6C10.8 4.66 10.335 3.525 9.405 2.595C8.475 1.665 7.34 1.2 6 1.2C4.66 1.2 3.525 1.665 2.595 2.595C1.665 3.525 1.2 4.66 1.2 6C1.2 6.43 1.255 6.85 1.365 7.26C1.475 7.67 1.64 8.06 1.86 8.43L0.99 9.3Z" fill="#2E5A75"/>
            </svg>
            </span>
            </div>

          </div>
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          
          onChange={handleFileSelect}
        />
      </div>

</div>
<div className=" rounded-md p-1 pl-2 pr-2">
<label className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">
  <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Lower Exception</span>
  <div className="mt-4">
  <input id="ldc-exception" type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600  peer-checked:bg-[#5AB860]">
  </div>
  </div>
  
</label>
</div>
<div className=" rounded-md p-1 pl-2 pr-2">
<label htmlFor="gst-certificate" className="block text-sm font-medium leading-6 text-gray-900">Lower exception certificate</label>
          <div className="mt-2">
        <label htmlFor="lower-exception-certificate" className="cursor-pointer">
          <div
            id="lower-exception-certificate"
            className={`flex min-h-9 flex-col items-center justify-center rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-[#017194]/20  ${dragging ? 'border-gray-400 bg-[#2E5A75]' : 'border-gray-300 bg-[#EBF5FF] hover:bg-[#EBF5FF]/50'}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-upload').click()}
          >
            <div className="flex justify-center items-center">
            <span className="text-xs text-[#2E5A75]">Browse or drop files &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="">
              <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.6L3 6.6L3.84 7.44L5.4 5.895L5.4 12H6.6L6.6 5.895L8.16 7.44L9 6.6L6 3.6ZM0.99 9.3C0.67 8.81 0.425 8.285 0.255 7.725C0.085 7.165 0 6.59 0 6C0 5.17 0.1576 4.39 0.4728 3.66C0.788 2.93 1.2154 2.295 1.755 1.755C2.295 1.215 2.93 0.7876 3.66 0.4728C4.39 0.158 5.17 0.0004 6 0C6.83 0 7.61 0.1576 8.34 0.4728C9.07 0.788 9.705 1.2154 10.245 1.755C10.785 2.295 11.2126 2.93 11.5278 3.66C11.843 4.39 12.0004 5.17 12 6C12 6.59 11.915 7.165 11.745 7.725C11.575 8.285 11.33 8.81 11.01 9.3L10.14 8.43C10.36 8.06 10.525 7.67 10.635 7.26C10.745 6.85 10.8 6.43 10.8 6C10.8 4.66 10.335 3.525 9.405 2.595C8.475 1.665 7.34 1.2 6 1.2C4.66 1.2 3.525 1.665 2.595 2.595C1.665 3.525 1.2 4.66 1.2 6C1.2 6.43 1.255 6.85 1.365 7.26C1.475 7.67 1.64 8.06 1.86 8.43L0.99 9.3Z" fill="#2E5A75"/>
            </svg>
            </span>
            </div>

          </div>
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          
          onChange={handleFileSelect}
        />
      </div>

</div>
<div className=" mr-4 rounded-md p-1 pl-2 pr-2">
<label htmlFor="payment-terms" className="block text-sm font-medium leading-6 text-gray-900">LDC Upper Limit</label>
          <div className="mt-2">
            <input type="text" name="ldc" id="ldc" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-black min-h-9 shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6"/>
          </div>
</div>


<div className="rounded-md p-1 pl-2 pr-2">
  <label htmlFor="gst-certificate" className="block text-sm font-medium leading-6 text-gray-900">LDC Start Date*</label>
  
  <div className="mt-2 ">
  <input id="ldc-start-date" className="block w-full rounded-md border-0 py-1.5 text-black min-h-9 shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6 date" type="date" placeholder="Date and Time"/>
  </div> 
  
</div>


<div className="rounded-md p-1 pl-2 pr-2">
  <label htmlFor="gst-certificate" className="block text-sm font-medium leading-6 text-gray-900">LDC End Date*</label>
  
  <div className="mt-2 ">
  <input id="ldc-end-date" className="block w-full rounded-md border-0 py-1.5 text-black min-h-9 shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6 date" type="date" placeholder="Date and Time"/>
  </div> 
  
</div>


<div className="col-start-4 rounded-md p-1 pl-2 pr-2">
<label htmlFor="gst-certificate" className="block text-sm font-medium leading-6 text-gray-900">Lower exception Certificate</label>
          <div className="mt-2">
        <label htmlFor="ldc-except" className="cursor-pointer">
          <div
            id="ldc-except"
            className={`flex min-h-9 flex-col items-center justify-center rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-[#017194]/20  ${dragging ? 'border-gray-400 bg-[#2E5A75]' : 'border-gray-300 bg-[#EBF5FF] hover:bg-[#EBF5FF]/50'}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-upload').click()}
          >
            <div className="flex justify-center items-center">
            <span className="text-xs text-[#2E5A75]">Browse or drop files &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="">
              <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3.6L3 6.6L3.84 7.44L5.4 5.895L5.4 12H6.6L6.6 5.895L8.16 7.44L9 6.6L6 3.6ZM0.99 9.3C0.67 8.81 0.425 8.285 0.255 7.725C0.085 7.165 0 6.59 0 6C0 5.17 0.1576 4.39 0.4728 3.66C0.788 2.93 1.2154 2.295 1.755 1.755C2.295 1.215 2.93 0.7876 3.66 0.4728C4.39 0.158 5.17 0.0004 6 0C6.83 0 7.61 0.1576 8.34 0.4728C9.07 0.788 9.705 1.2154 10.245 1.755C10.785 2.295 11.2126 2.93 11.5278 3.66C11.843 4.39 12.0004 5.17 12 6C12 6.59 11.915 7.165 11.745 7.725C11.575 8.285 11.33 8.81 11.01 9.3L10.14 8.43C10.36 8.06 10.525 7.67 10.635 7.26C10.745 6.85 10.8 6.43 10.8 6C10.8 4.66 10.335 3.525 9.405 2.595C8.475 1.665 7.34 1.2 6 1.2C4.66 1.2 3.525 1.665 2.595 2.595C1.665 3.525 1.2 4.66 1.2 6C1.2 6.43 1.255 6.85 1.365 7.26C1.475 7.67 1.64 8.06 1.86 8.43L0.99 9.3Z" fill="#2E5A75"/>
            </svg>
            </span>
            </div>

          </div>
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          
          onChange={handleFileSelect}
        />
      </div>


            
         
</div>
<div className=" rounded-md p-1 pl-2 pr-2 mr-4">
  <label htmlFor="payment-terms" className="block text-sm font-medium leading-6 text-gray-900">PAN Number</label>
          <div className="mt-2">
            <input type="text" name="pan-number" id="pan-number" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-black min-h-9 shadow-sm ring-1 ring-inset ring-[#017194]/20 p-1 pl-3 pr-3 placeholder:text-gray-400  focus:ring-inset focus:ring-[#2E5A75]/50 sm:text-sm sm:leading-6"/>
          </div>
</div>


</div>
</form>


</div>

</div> 





{/* right div to scrollable div */}
<div className=" basis-1/6 p-1 mr-4 rounded-md border-[1px]">
<ul className="flex justify-between items-center">
  
  <li className="mx-3 font-bold text-[#2E5A75]">Attachments</li>
  <li><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9351 3.32577C11.9918 3.26571 12.0601 3.21786 12.136 3.18516C12.2118 3.15246 12.2935 3.13559 12.3761 3.13559C12.4587 3.13559 12.5404 3.15246 12.6163 3.18516C12.6921 3.21786 12.7605 3.26571 12.8172 3.32577C13.0609 3.57926 13.0609 3.99005 12.8172 4.24355L5.3223 12.0492C5.03896 12.3495 4.69727 12.5887 4.31817 12.7522C3.93907 12.9157 3.53057 13 3.11772 13C2.70486 13 2.29636 12.9157 1.91727 12.7522C1.53817 12.5887 1.19647 12.3495 0.913133 12.0492C-0.304378 10.7817 -0.304378 8.72584 0.913133 7.45772L7.52591 0.570486C7.69593 0.39033 7.90096 0.2468 8.12843 0.148701C8.35589 0.0506014 8.60101 0 8.84873 0C9.09645 0 9.34156 0.0506014 9.56903 0.148701C9.7965 0.2468 10.0015 0.39033 10.1715 0.570486C10.9022 1.33097 10.9022 2.56464 10.1715 3.32577L4.43956 9.29327C4.38288 9.35323 4.31455 9.40099 4.23877 9.43363C4.16299 9.46627 4.08135 9.48311 3.99884 9.48311C3.91633 9.48311 3.83468 9.46627 3.7589 9.43363C3.68312 9.40099 3.6148 9.35323 3.55812 9.29327C3.44091 9.16923 3.3756 9.00504 3.3756 8.83438C3.3756 8.66373 3.44091 8.49954 3.55812 8.37549L9.2901 2.40669C9.4075 2.28261 9.47292 2.11829 9.47292 1.94748C9.47292 1.77667 9.4075 1.61234 9.2901 1.48826C9.23341 1.42821 9.16505 1.38036 9.08921 1.34766C9.01337 1.31495 8.93165 1.29809 8.84905 1.29809C8.76646 1.29809 8.68474 1.31495 8.6089 1.34766C8.53306 1.38036 8.4647 1.42821 8.40801 1.48826L1.79393 8.3768C1.06394 9.13728 1.06394 10.3709 1.79393 11.1314C1.96394 11.3116 2.16897 11.4551 2.39644 11.5532C2.62391 11.6513 2.86902 11.7019 3.11674 11.7019C3.36447 11.7019 3.60958 11.6513 3.83705 11.5532C4.06451 11.4551 4.26954 11.3116 4.43956 11.1314L11.9351 3.32577Z" fill="#2E5A75"/>
</svg>
</li>
</ul>
<hr className="-mr-1 -ml-1 mt-1" />

<div className={`mt-5 ml-3 ${visibility["gst_cert"][0]} `}>
  <span className='font-bold text-black text-sm'>GST Certificate</span>
<div className='mt-3 ml-2 block w-[55%] bg-[#017194]/15 rounded-md border-0  text-black shadow-sm  pl-3 pr-3 focus:ring-inset sm:text-sm sm:leading-6 items-center'>
<span className='p-1 text-xs line-clamp-1 leading-5 '>{visibility["gst_cert"][1]}</span>
</div>
</div>

<div className={`mt-5 ml-3 ${visibility["pan_numb"][0]}`}>
  <span className='font-bold text-black text-sm'>PAN Number</span>
<div className=' mt-3 ml-2 block w-[55%] bg-[#017194]/15 rounded-md border-0  text-black shadow-sm  pl-3 pr-3 focus:ring-inset sm:text-sm sm:leading-6 items-center'>
<span className='p-1 text-xs line-clamp-1 leading-5'>{visibility["pan_numb"][1]}</span>
</div>
</div>

<div className={`mt-5 ml-3 ${visibility["msme_cert"][0]}`}>
  <span className='font-bold text-black text-sm'>MSME Certificate</span>
<div className='mt-3 ml-2 block w-[55%] bg-[#017194]/15 rounded-md border-0  text-black shadow-sm  pl-3 pr-3 focus:ring-inset sm:text-sm sm:leading-6 items-center'>

<span className='p-1 text-xs line-clamp-1 leading-5'>{visibility["msme_cert"][1]}</span>
</div>
</div>

<hr className="-mr-1 -ml-1 mt-6 hidden" />

<div className={`mt-5 ml-3 ${visibility["lowe_exce"][0]}`}>
  <span className='font-bold text-black text-sm'>Lower exception certificate</span>
<div className='mt-3 ml-2 block w-[55%] bg-[#017194]/15 rounded-md border-0  text-black shadow-sm  pl-3 pr-3 focus:ring-inset sm:text-sm sm:leading-6 items-center'>
<span className='p-1 text-xs line-clamp-1 leading-5'>{visibility["lowe_exce"][1]}</span>
</div>
</div>

<div className={`mt-5 ml-3 ${visibility["vend_cont"][0]}`}>
  <span className='font-bold text-black text-sm'>Vendor Contract</span>
<div className='mt-3 ml-2 block w-[55%] bg-[#017194]/15 rounded-md border-0  text-black shadow-sm  pl-3 pr-3 focus:ring-inset sm:text-sm sm:leading-6 items-center'>
<span className='p-1 text-xs line-clamp-1 leading-5'>{visibility["vend_cont"][1]}</span>
</div>
</div>

<div className={`mt-5 ml-3 ${visibility["vend_fina"][0]}`}>
  <span className='font-bold text-black text-sm'>Vendor Final Proposal</span>
<div className='mt-3 ml-2 block w-[55%] bg-[#017194]/15 rounded-md border-0  text-black shadow-sm  pl-3 pr-3 focus:ring-inset sm:text-sm sm:leading-6 items-center'>
<span className='p-1 text-xs line-clamp-1 leading-5'>{visibility["vend_fina"][1]}</span>
</div>
</div>

</div>
</div>
</main>

    
    </>
  );
}
