import { House, Hash, Bell, Envelope, Bookmark, FileText, User, DotsThreeCircle } from "phosphor-react";
import twitterLogo from '../assets/logo-twitter.svg'
import './Sidebar.css'

export function Sidebar(){
  return(
    <aside className='sidebar'>
    <img className='logo' src={twitterLogo} alt="logo" />
    <nav className='mainNavigation'>
      <a className='active' href=""><House weight='fill'/>  Home</a>
      <a href=""><Hash/>Explore</a>
      <a href=""><Bell/> Notifications</a>
      <a href=""><Envelope/> Messages</a>
      <a href=""><Bookmark/>Bookmarks</a>
      <a href=""><FileText/>Lists</a>
      <a href=""><User/>Profile</a>
      <a href=""><DotsThreeCircle/>More</a>
    </nav>
    <button className='newTweet' type='button'>Tweet</button>
  </aside>
  )
}