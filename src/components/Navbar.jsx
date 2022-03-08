import React, {useEffect, useState} from "react";
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, FundOutlined, BulbOutlined } from '@ant-design/icons';
import icon from "../images/icon.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect( () => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener( 'resize', handleResize);
  }, []);

  useEffect( () => {
    if(screenSize <760) {
      setActiveMenu(false);
    }else {
      setActiveMenu(true);
    }
  }, [screenSize])

  return (
    <div className="nav-container">
        <div className="logo-container">
            <div>
              <Avatar src={icon} size='large'/>

              <Typography.Title level={3} className='logo'>
                  <Link to="/">CryptoUniverse</Link>
              </Typography.Title>

              <Button className='menu-control-container' onClick={ ()=> setActiveMenu(!activeMenu)} />
            </div>

            <Menu theme="dark" className="menu-container">
                <Menu.Item icon={<HomeOutlined />}>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                  <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                  <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                  <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>

            {/* <Button className="menu-container-container">

            </Button> */}
        </div>

    </div>
  )
}

export default Navbar;
