import React, { useState } from "react";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import { Link } from "react-router-dom";
//import icons from react icons
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import { HiCreditCard } from "react-icons/hi";
import { MdChatBubble, MdOutlinePassword } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";



import "./MenuSidebarComponent.css";

const MenuSidebarComponent = () => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            <p>{menuCollapse ? "KMS" : "KEEP MY SPACE"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">

                            <MenuItem active={true} icon={<FiHome />} >
                                <Link to={"/dashboard"}>
                                    Dashboard
                                </Link>
                            </MenuItem>

                            <MenuItem icon={<MdOutlineFamilyRestroom />}>
                                <Link to={"/tenant"}>
                                    Keluarga
                                </Link>
                            </MenuItem>

                            <MenuItem icon={<HiCreditCard />}>
                                <Link to={"/asset"}>
                                    Harta
                                </Link>
                            </MenuItem>

                            <MenuItem icon={<MdChatBubble
                            />}>
                                <Link to={"/testament"}>
                                    Pesan Wasiat
                                </Link>
                            </MenuItem>

                            <MenuItem icon={<IoPerson
                            />}>
                                <Link to={"/password-manager"}>
                                    Manager Akun
                                </Link>
                            </MenuItem>



                            <MenuItem icon={<AiFillPhone
                            />}>
                                <Link to={"/contact"}>
                                    Kontak
                                </Link>
                            </MenuItem>


                            <MenuItem icon={<HiUserGroup
                            />}>
                                <Link to={"/member"}>
                                    Anggota
                                </Link>

                            </MenuItem>

                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />} onClick={() => {
                                localStorage.removeItem('token')
                                window.location.href = "/login"
                            }}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default MenuSidebarComponent;