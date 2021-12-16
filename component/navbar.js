function navbar(){
    return `  <nav id="nav">
    <div
      class="d-flex justify-content-center align-items-center offer_alert"
      id="offer_alert"
    >
      <p class="mt-3" id="offer_text">
        FREE SHIPPING on all orders! 3 Days Only. Ends 12/13.
      </p>
    </div>
    <div class="navbar" id="navbar">
      <div class="nav_left">
        <ul>
          <li>
            <a href=""
              ><p class="hover-underline-animation ">Store & Services</p></a
            >
          </li>
          <li>
            <a href=""><p class="hover-underline-animation ">Chat Live</p></a>
          </li>
          <li>
            <a href=""><p class="hover-underline-animation ">Rewards</p></a>
          </li>
        </ul>
      </div>
      <div class="nav_center">
        <img class="logo" src="./images/images_17.png" alt="" />
      </div>
      <div class="nav_right">
        <div class="nav_search">
          <i class="far fa-search search_icon"></i>
          <input type="text" class="searchInput" placeholder="Search" />
          <i class="far fa-user-alt"></i>
          <i class="far fa-heart"></i>
          <i class="far fa-shopping-bag"></i>
        </div>
      </div>
    </div>
    <div class="navbarBottom text-center">
      <b class="bottomText">FREE EXPEDITED SHIPPING on orders $150+! </b
      ><span>One Day Only! &#5167;</span>
    </div>
    <hr />
    <div class="middleNavbar" id="middleNavbar">
      <ul class="midNavLiist">
        <li>
          <a class="midNavAnchor" href=""
            ><p  class="hover-underline-animation navAnchor">Bestsellers</p></a
          >
        </li>
        <li>
          <a class="midNavAnchor" href=""
            ><p  class="hover-underline-animation navAnchor">New</p></a
          >
        </li>
        <li>
          <a class="midNavAnchor" href=""
            ><p  class="hover-underline-animation navAnchor">Brands</p></a
          >
        </li>
        <li>
          <a class="midNavAnchor" href=""
            ><p  class="hover-underline-animation navAnchor">Skincare</p></a
          >
        </li>
        <li>
          <a class="midNavAnchor" href=""
            ><p  class="hover-underline-animation navAnchor">Makeup</p></a
          >
        </li>
        <li>
          <a class="midNavAnchor" href=""
            ><p  class="hover-underline-animation navAnchor">Hair</p></a
          >
        </li>
        <li>
          <a class="midNavAnchor" href=""
            ><p class="hover-underline-animation navAnchor">Bath&Body</p></a
          >
        </li>
        <li>
          <a class="midNavAnchor" href=""
            ><p  class="hover-underline-animation navAnchor">Fragrence</p></a
          >
        </li>
        <li>
          <a class="midNavAnchor" href=""
            ><p  class="hover-underline-animation navAnch
        </li>
        <li>
          <a class="midNavAnchor" href=""
            ><p  class="hover-underline-animation navAnchor navAnchor">Featured</p></a
          >
        </li>
        <li>
          <a class="midNavAnchor" href=""
            ><p  class="hover-underline-animation navAnchor navAnchor">Why Clean?</p></a
          >
        </li>
      </ul>
    </div>
    <hr />
    <div class="boxNav" id="boxNav">
          <div  class="items" id="items">
      <ul  class="HeaderNavMainMenu__LinkList" id="HeaderNavMainMenu__LinkList"
      ></ul>
    </div>
    </div>

  </nav>`
}

export default navbar()