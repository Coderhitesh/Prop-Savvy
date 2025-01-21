import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer, // Dashboard
  cilImage,       // Banner & Images
  cilText,        // Testimonial & Blogs
  cilUser,        // All User
  cilGroup,       // All Provider
  cilChatBubble,  // All Chat
  cilWallet,      // Withdraw Request
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Banner',
    to: '/banner/all-banner',
    icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Work Description Image',
    to: '/work_description_image/all_work_description_image',
    icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Plan Journey Image',
    to: '/plan_journey_image/all_plan_journey_image',
    icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'About Image',
    to: '/about_image/all_about_image',
    icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Testimonial',
    to: '/testimonial/all_testimonial',
    icon: <CIcon icon={cilText} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Blogs',
    to: '/blogs/all_blogs',
    icon: <CIcon icon={cilText} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'All User',
    to: '/user/all_user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'All Provider',
    to: '/provider/all_provider',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'All Chat',
    to: '/chats/all_chat',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Withdraw Request',
    to: '/withdraw/all_withdraw',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  },
]

export default _nav
