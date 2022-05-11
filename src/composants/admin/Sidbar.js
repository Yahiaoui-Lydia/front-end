import React from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,

} from 'cdbreact';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (


<div
      style={{ display: "flex", overflow:"scroll initial"}} className='sidbar'
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#333"
      >
        <CDBSidebarHeader
          prefix={
            <i className="fa fa-bars fa-large"></i>
          }
        >
          <a href="/" className="text-decoration-none" style={{color:"inherit"}}>
            Contrast
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="columns"
              >
                dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/tables"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="table"
              >
                tables
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/profile"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="user"
              >
                profile
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="exclamation-circle"
              >
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        
      </CDBSidebar>
    </div>

      // <CDBSidebar textColor="#333" backgroundColor="#f4f4f4" >
      //   <CDBSidebarHeader prefix={<i className="fa fa-bars" />}></CDBSidebarHeader>
      //   <CDBSidebarContent>
      //     <CDBSidebarMenu>
      //       <CDBSidebarMenuItem icon="bi bi-graph-up-arrow" textFontSize="14px">
      //         <a href='/'>   Acceuil</a>
         
      //       </CDBSidebarMenuItem>
      //       <CDBSidebarMenuItem icon="bi bi-shop" textFontSize="14px">
      //        Gestion des Produits
      //       </CDBSidebarMenuItem>
      //       <CDBSidebarMenuItem icon="bi bi-file-earmark-person" iconType="solid" textFontSize="14px">
      //        Gestion des Utilisateurs
      //       </CDBSidebarMenuItem>
      //       <CDBSidebarMenuItem icon="bi bi-briefcase" iconType="solid" textFontSize="14px">
      //       Gestion des demandes B2B
      //       </CDBSidebarMenuItem>
      //     </CDBSidebarMenu>
        
      //   </CDBSidebarContent>

      
      // </CDBSidebar>
  )
};

export default Sidebar;