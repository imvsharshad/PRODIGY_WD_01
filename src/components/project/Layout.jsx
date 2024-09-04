import React from 'react'
import './../project/Layout.css'
import './../project/Responsive.css'
import SekiroBG from './../assets/SekiroBG.jpg'
import GOSBG from './../assets/GOS.jpg'
import Sekiro from './../assets/Sekiro.png'
import GOSlogo from './../assets/GOSlogo.png'
import GOSlogo2 from './../assets/GOSlogo4815.png'
import ROR from './../assets/ROR.jpg'
import Death from './../assets/Death.png'
import RORlogo from './../assets/Riseofroninlogo.png'
import Sekirologo2 from './../assets/Sekirologo2.png'

function Layout() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    return (
        <div>
            <div className="main">
                <div className="navbar">

                    <i class="fa-brands fa-playstation playstation-icon navbar-icon"></i>
                    <i class="fa-brands fa-xbox xbox-icon navbar-icon"></i>
                    <i class="fa-brands fa-steam steam-icon navbar-icon"></i>
                    <div className="PS font-manrope">PLAYSTATION HITS</div>
                    <div className="PS font-manrope">PLAYSTATION PLUS</div>
                    <div className="PS font-manrope">PLAYSTATION CLASSIC</div>
                    <div className="search">
                        <input type="text" placeholder='SEARCH' className='searchbox font-manrope' />
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    </div>
                </div>
                <div className="carousal">
                    <div class="swiper" id='swiper'>
                        <div class="swiper-wrapper" id='swiper-wrapper'>
                            <div class="swiper-slide">
                                <img src={SekiroBG} alt="Sekiro" id='sekiroBG' />
                                <img src={Sekiro} alt="Sekiro" id='sekiro' />
                                <img src={Sekirologo2} alt="Sekirologo2" id='sekirologo2' />
                                <div className="gos-container">
                                    <div className="gos-rating">9.5</div>
                                    <div className="gos-content font-manrope">
                                        <ul>
                                            <li className='li1 font-manrope'>Lorem hsao quaqi</li>
                                            <li className='li2 font-manrope'>MASTERPIECE</li>
                                            <li className='li3 font-manrope'>Lorem ipsum</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="gos-container">
                                    <div className="gos-rating2">+</div>
                                    <div className="gos-content2 font-manrope">
                                        <ul>
                                            <li className='li1 font-manrope'>Lorem hsao quaqi</li>
                                            <li className='li2 font-manrope'>ORDER NOW</li>
                                            <li className='li3 font-manrope'>Lorem ipsum</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <div className="sekiro-quote ">
                                    <div className="lines line1 font-libre">TAKE REVENGE.</div>
                                    <div className="lines line2 font-libre">RESTORE YOUR HONOUR.</div>
                                    <div className="lines line3 font-libre">KILL INGENIOUSLY.</div>
                                </div> */}
                                <div className="side-content-main">
                                    <div className="tick-icon">
                                        <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="side-content font-manrope">
                                        Lorem ipsum
                                    </div>
                                    <div className="side-content2 font-manrope">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Commodi voluptatibus
                                    </div>
                                    
                                </div>
                                <div className="side-content2-main">
                                    <div className="tick-icon">
                                        <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="side-content font-manrope">
                                        Lorem ipsum
                                    </div>
                                    <div className="side-content2 font-manrope">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Commodi voluptatibus
                                    </div>
                                    
                                </div>
                                <div className="trailer-main">
                                    <div className="trailer font-manrope">WATCH GAME TRAILER</div>
                                </div>
                                <iframe id='ytvideo' width="560" height="315" src="https://www.youtube.com/embed/rXMX4YJ7Lks?si=4g2mP_gon-1YTVor" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                <div className="socials">
                                    <i class="fa-brands fa-facebook icon"></i>
                                    <i class="fa-brands fa-twitter icon"></i>
                                    <i class="fa-brands fa-instagram icon"></i>
                                </div>


                            </div>
                            <div class="swiper-slide gos-slide">
                                <img src={GOSBG} alt="GOSBG" id='gosbg' />
                                <img src={GOSlogo} alt="GOSlogo" id='goslogo' />
                                <img src={GOSlogo2} alt="GOSlogo2" id='goslogo2' />
                                <div className="gos-container">
                                    <div className="gos-rating">9.9</div>
                                    <div className="gos-content font-manrope">
                                        <ul>
                                            <li className='li1 font-manrope'>Lorem hsao quaqi</li>
                                            <li className='li2 font-manrope'>MASTERPIECE</li>
                                            <li className='li3 font-manrope'>Lorem ipsum</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="gos-container">
                                    <div className="gos-rating2">+</div>
                                    <div className="gos-content2 font-manrope">
                                        <ul>
                                            <li className='li1 font-manrope'>Lorem hsao quaqi</li>
                                            <li className='li2 font-manrope'>ORDER NOW</li>
                                            <li className='li3 font-manrope'>Lorem ipsum</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="side-content-main">
                                    <div className="tick-icon">
                                        <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="side-content font-manrope">
                                        Lorem ipsum
                                    </div>
                                    <div className="side-content2 font-manrope">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Commodi voluptatibus
                                    </div>
                                    
                                </div>
                                <div className="side-content2-main">
                                    <div className="tick-icon">
                                        <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="side-content font-manrope">
                                        Lorem ipsum
                                    </div>
                                    <div className="side-content2 font-manrope">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Commodi voluptatibus
                                    </div>
                                    
                                </div>
                                <div className="trailer-main">
                                    <div className="trailer font-manrope">WATCH GAME TRAILER</div>
                                </div>
                                <iframe id='ytvideo' width="560" height="315" src="https://www.youtube.com/embed/rTNfgIAi3pY?si=zH7MMeGTTEqJQCnO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div className="socials">
                                    <i class="fa-brands fa-facebook icon"></i>
                                    <i class="fa-brands fa-twitter icon"></i>
                                    <i class="fa-brands fa-instagram icon"></i>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <img src={ROR} alt="ROR" id='ror' />
                                <div className="ror-container">
                                    <img src={Death} alt="Death" id='death' />
                                </div>
                                <img src={RORlogo} alt="RORLogo" id='rorlogo' />
                                <div className="gos-container">
                                    <div className="gos-rating">8.9</div>
                                    <div className="gos-content font-manrope">
                                        <ul>
                                            <li className='li1 font-manrope'>Lorem hsao quaqi</li>
                                            <li className='li2 font-manrope'>MASTERPIECE</li>
                                            <li className='li3 font-manrope'>Lorem ipsum</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="gos-container">
                                    <div className="gos-rating2">+</div>
                                    <div className="gos-content2 font-manrope">
                                        <ul>
                                            <li className='li1 font-manrope'>Lorem hsao quaqi</li>
                                            <li className='li2 font-manrope'>ORDER NOW</li>
                                            <li className='li3 font-manrope'>Lorem ipsum</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="side-content-main">
                                    <div className="tick-icon">
                                        <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="side-content font-manrope">
                                        Lorem ipsum
                                    </div>
                                    <div className="side-content2 font-manrope">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Commodi voluptatibus
                                    </div>
                                    
                                </div>
                                <div className="side-content2-main">
                                    <div className="tick-icon">
                                        <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="side-content font-manrope">
                                        Lorem ipsum
                                    </div>
                                    <div className="side-content2 font-manrope">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Commodi voluptatibus
                                    </div>
                                    
                                </div>
                                <div className="trailer-main">
                                    <div className="trailer font-manrope">WATCH GAME TRAILER</div>
                                </div>
                                <iframe id='ytvideo' width="560" height="315" src="https://www.youtube.com/embed/34FMSgdzzvI?si=JQnspvI5DoVdBMAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                
                                <div className="socials">
                                    <i class="fa-brands fa-facebook icon"></i>
                                    <i class="fa-brands fa-twitter icon"></i>
                                    <i class="fa-brands fa-instagram icon"></i>
                                </div>

                            </div>
                        </div>
                        <div class="swiper-pagination" id='swiper-pagination'></div>

                        <div class="swiper-button-prev" id='swiper-button-prev'></div>
                        <div class="swiper-button-next" id='swiper-button-next'></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;