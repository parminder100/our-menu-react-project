import { useState } from "react";
import "../OurMenu/OurMenu.css";
import { OurMenuData } from "../OurMenuData/OurMenuData";
import { OurMenuBtns } from "../OurMenuData/OurMenuData";

const OurMenu = () =>{
    const [menuBtn, setMenuBtn] = useState(0);
    const [filterMenuData, setFilterMenuData] = useState(OurMenuData);
    const [searchData, setSearchData] = useState("");

    const handleMenuBtn = (index) =>{
        setMenuBtn(index);
        // console.log(OurMenuBtns[index].menuBtnName);
        // console.log(OurMenuData[index].category);
        const selectedBtn = OurMenuBtns[index].menuBtnName;
        const matching = OurMenuData.filter((menu)=>menu.category.trim().toLowerCase() === selectedBtn);
        if(matching.length > 0){
            // console.log("hello");
            setFilterMenuData(matching);
        }
        else{
            setFilterMenuData(OurMenuData);
        }
    }

    const handleSearchData = (event) =>{
        const searchTerm = event.target.value;
        const searchMenu = OurMenuData.filter((menu) => menu.MenuName.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()));
        setSearchData(searchTerm);
        setFilterMenuData(searchMenu);
        console.log(searchMenu);
    }
    return(
        <>
            <main className="our__menu__main">
                <section className="our__menu__grid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="our__menu__title__container">
                                    <div className="project__title">our menu</div>
                                    <div className="underline"></div>
                                </div>
                                <div className="text-center mb-3">
                                    <input className="search__menu" type="text" value={searchData}
                                        placeholder="Search menu" 
                                        onChange={handleSearchData} 
                                    />
                                </div>
                                <ul className="menu__category">
                                    {
                                        OurMenuBtns.map((menuCategory, index)=>(
                                            <li key={menuCategory.id} className={`btn ${menuBtn === index ? 'btn--active' : ''}`} 
                                                onClick={()=>handleMenuBtn(index)}
                                                >
                                                {menuCategory.menuBtnName}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {
                                filterMenuData && filterMenuData.map((menu)=>(
                                    <div key={menu.id} className="col-12, col-sm-12 col-lg-6 col-xl-6 menu__item__card">
                                        <div className="menu__items__list">
                                            <img src={menu.MenuImage} alt={menu.MenuName} />
                                            <div>
                                                <div className="menu__name__price">
                                                    <p>{menu.MenuName}</p>
                                                    <p className="price">{menu.MenuPrice}</p>
                                                </div>
                                                <p className="menu__desc">{menu.MenuDesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default OurMenu;