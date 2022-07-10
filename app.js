//variables

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent= document.querySelector('.cart-content');
const productsDOMHeadphones = document.getElementById('headphones');
const productsDOMAirdopes = document.getElementById('airdopes');
const productsDOMWatches = document.getElementById('watches');
const productsDOMEarphones = document.getElementById('earphones');
const productsDOMsaleItems = document.getElementById('saleItems');


// cart 
let cart = [];

//buttons
let buttonsDOM = []; 

//getting the produtcs
class Products{
    async getsaleItems(){
        try{
        let result = await fetch('product.json');
        let data = await result.json();

        let saleItems = data.saleItems;
        saleItems = saleItems.map(item => {
            const {title, price, originalprice} = item.fields;
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return {title, price, id, image, originalprice}
        })
            return saleItems;
        }
        catch (error){
            console.log(error);

        }
    }
    async getHeadphones(){
        try{
        let result = await fetch('product.json');
        let data = await result.json();

        let bassheads = data.headphones;
        bassheads = bassheads.map(item => {
            const {title, price} = item.fields;
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return {title, price, id, image}
        })
            return bassheads;
        }
        catch (error){
            console.log(error);

        }
    }
    async getAirdopes(){
        try{
        let result = await fetch('product.json');
        let data = await result.json();

        let airdopes = data.airdopes;
        airdopes = airdopes.map(item => {
            const {title, price} = item.fields;
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return {title, price, id, image}
        })
            return airdopes;
        }
        catch (error){
            console.log(error);

        }
    }
    async getWatches(){
        try{
        let result = await fetch('product.json');
        let data = await result.json();

        let watches = data.watches;
        watches = watches.map(item => {
            const {title, price} = item.fields;
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return {title, price, id, image}
        })
            return watches;
        }
        catch (error){
            console.log(error);

        }
    }
    async getEarphones(){
        try{
        let result = await fetch('product.json');
        let data = await result.json();

        let earphones = data.earphones;
        earphones = earphones.map(item => {
            const {title, price} = item.fields;
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return {title, price, id, image}
        })
            return earphones;
        }
        catch (error){
            console.log(error);

        }
    }

}
//display products
class UI{
    displaysaleItems(saleItems){
        let result = '';
        saleItems.forEach(saleItem=>{
            result += `
            <!-- single products -->
            <article class="product">
                <div class="img-container">
                    <img src=${saleItem.image} alt="product" class="product-img">
                     <button class="bag-btn" data-id="${saleItem.id}">
                     <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
                <h3>${saleItem.title}</h3>
                <h4>Rs.${saleItem.price}</h4>
                <h5>Rs.${saleItem.originalprice}</h5>
               
                
            </article>
            <!--end of single products -->
            `;
        });
        productsDOMsaleItems.innerHTML = result;
    }
    displaybassheads(bassheads){
       let result = '';
       bassheads.forEach(basshead=>{
           result += `
           <!-- single products -->
           <article class="product">
               <div class="img-container">
                   <img src=${basshead.image} alt="product" class="product-img">
                    <button class="bag-btn" data-id="${basshead.id}">
                       <i class = "fas fa-shopping-cart"></i>
                       Add to Cart
                   </button>
               </div>
               <h3>${basshead.title}</h3>
               <h4>Rs.${basshead.price}</h4>
           </article>
           <!--end of single products -->
           `;
       });
       productsDOMHeadphones.innerHTML = result;

    }
    displayAirdopes(airdopes){
        let result = '';
        airdopes.forEach(airdope=>{
            result += `
            <!-- single products -->
            <article class="product">
                <div class="img-container">
                    <img src=${airdope.image} alt="product" class="product-img">
                     <button class="bag-btn" data-id="${airdope.id}">
                        <i class = "fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
                <h3>${airdope.title}</h3>
                <h4>Rs.${airdope.price}</h4>
            </article>
            <!--end of single products -->
            `;
        });
        productsDOMAirdopes.innerHTML = result;
 
     }
     displayWatches(watches){
        let result = '';
        watches.forEach(watch=>{
            result += `
            <!-- single products -->
            <article class="product">
                <div class="img-container">
                    <img src=${watch.image} alt="product" class="product-img">
                     <button class="bag-btn" data-id="${watch.id}">
                        <i class = "fas fa-shopping cart"></i>
                        Add to Cart
                    </button>
                </div>
                <h3>${watch.title}</h3>
                <h4>Rs.${watch.price}</h4>
            </article>
            <!--end of single products -->
            `;
        });
        productsDOMWatches.innerHTML = result;
 
     }
     displayEarphones(earphones){
        let result = '';
        earphones.forEach(earphone=>{
            result += `
            <!-- single products -->
            <article class="product">
                <div class="img-container">
                    <img src=${earphone.image} alt="product" class="product-img">
                     <button class="bag-btn" data-id="${earphone.id}">
                     <i class = "fas fa-shopping cart"></i>
                      Add to Cart
                    </button>
                </div>
                <h3>${earphone.title}</h3>
                <h4>Rs.${earphone.price}</h4>
            </article>
            <!--end of single products -->
            `;
        });
        productsDOMEarphones.innerHTML = result;
    }

        getBagButtons(){
            const buttons = [...document.querySelectorAll(".bag-btn")];
            buttonsDOM = buttons;
            buttons.forEach(button =>{
                let id = button.dataset.id;
                let inCart = cart.find(item => item.id=== id);
                if(inCart){
                    button.innerText = "In Cart";
                    button.disabled = true;
                }
                
                    button.addEventListener('click', (event)=>{
                        event.target.innerText = "In Cart";
                        event.target.disabled = true;
                        // get product from products
                        let cartItem = {};
                        if(parseInt(id/100) == 1){
                            cartItem = {...Storage.getsaleItems(id), amount:1};
                        }
                        else if(parseInt(id/100) == 2){
                            cartItem = {...Storage.getHeadphones(id), amount:1};
                        }
                        else if(parseInt(id/100) == 3){
                            cartItem = {...Storage.getAirdopes(id), amount:1};
                        }
                        else if(parseInt(id/100) == 4){
                            cartItem = {...Storage.getWatches(id), amount:1};
                        }
                        else if(parseInt(id/100) == 5){
                            cartItem = {...Storage.getEarphones(id), amount:1};
                        }
                        
                        
                        
                        

                        // add product to the cart
                        cart = [...cart, cartItem];

                        // save cart in local storage
                        Storage.saveCart(cart);
                        
                        // set cart values
                        this.setCartValues(cart);

                        // display cart items
                        this.addCartItem(cartItem);

                        // show the cart
                        this.showCart();

                    });
               

            });
        }
        setCartValues(cart){
            let tempTotal = 0;
            let itemsTotal = 0;
            cart.map(item =>{
                tempTotal += item.price * item.amount;
                itemsTotal += item.amount;
            })
            cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
            cartItems.innerText = itemsTotal;
            
            
        }
        addCartItem(item){
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `  <img src="${item.image}" alt="product">
            <div>
            <h4>${item.title}</h4>
            <h5>Rs.${item.price}</h5>
            <span class="remove-item" data-id=${item.id}>remove</span>
            </div>
            <div>
                <i class="fas fa-chevron-up"data-id=${item.id}></i>
                <p class="item-amount">${item.amount}</p>
                <i class="fas fa-chevron-down"data-id=${item.id}></i>
            </div>`;
            cartContent.appendChild(div);
        }
        showCart(){
            cartOverlay.classList.add('transparentBcg');
            cartDOM.classList.add('showCart');
        }

        //to always show the cartitems after refreshing the page

        setupAPP(){
            cart = Storage.getCart();
            this.setCartValues(cart);
            this.populateCart(cart);
            cartBtn.addEventListener('click', this.showCart);
            closeCartBtn.addEventListener('click',this.hideCart);

        }

        populateCart(cart){
            cart.forEach(item => this.addCartItem(item));
        }

        hideCart(){
            cartOverlay.classList.remove('transparentBcg');
            cartDOM.classList.remove('showCart'); 
        }
        //clear cart button

        cartLogic(){
            clearCartBtn.addEventListener('click', ()=>{
                this.clearCart();
            });
            //cart functionality
            cartContent.addEventListener('click',event =>{
                if(event.target.classList.contains('remove-item'))
                {
                    let removeItem = event.target;
                    let id = removeItem.dataset.id;
                    cartContent.removeChild(removeItem.parentElement.parentElement);
                    this.removeItem(id);
                }
                else if(event.target.classList.contains('fa-chevron-up')){
                    let addAmount = event.target;
                    let id = addAmount.dataset.id;
                    let tempItem = cart.find(item => item.id=== id);
                    tempItem.amount = tempItem.amount+1;
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    addAmount.nextElementSibling.innerText = tempItem.amount;

                }
                else if(event.target.classList.contains('fa-chevron-down')){
                    let lowerAmount = event.target;
                    let id = lowerAmount.dataset.id;
                    let tempItem = cart.find(item => item.id=== id);
                    tempItem.amount = tempItem.amount-1;
                    if(tempItem.amount>0){
                        Storage.saveCart(cart);
                        this.setCartValues(cart);
                        lowerAmount.previousElementSibling.innerText = tempItem.amount;

                    }
                    else{
                        cartContent.removeChild(lowerAmount.parentElement.parentElement);
                        this.removeItem(id);
                    }
 

                }
            })
        }
        

        clearCart(){
            let cartItems = cart.map(item => item.id);
            cartItems.forEach(id => this.removeItem(id));
            while(cartContent.children.length>0){
                cartContent.removeChild(cartContent.children[0]);
            }
            this.hideCart();
        }
        removeItem(id){
            cart = cart.filter(item => item.id !== id);
            this.setCartValues(cart);
            Storage.saveCart(cart);
            let button = this.getSingleButton(id);
            button.disabled = false;
            button.innerHTML = `<i class= "fas fa-shopping-cart"></i>add to cart`;
        }

        getSingleButton(id){
            return buttonsDOM.find(button => button.dataset.id === id);
        }

 
     

}

//local storage
class Storage{
    static savesaleItems(saleItems) {
        localStorage.setItem("saleItems", JSON.stringify(saleItems));
    }
    static saveHeadphones(bassheads) {
        localStorage.setItem("bassheads", JSON.stringify(bassheads));
    }
    static saveAirdopes(airdopes) {
        localStorage.setItem("airdopes", JSON.stringify(airdopes));
    }
    static saveWatches(watches) {
        localStorage.setItem("watches", JSON.stringify(watches));
    }
    static saveEarphones(earphones) {
        localStorage.setItem("earphones", JSON.stringify(earphones));
    }
    static getsaleItems(id){
        let saleItems = JSON.parse(localStorage.getItem('saleItems'));
        return saleItems.find(saleItem => saleItem.id === id)
    }
    static getHeadphones(id){
        let bassheads = JSON.parse(localStorage.getItem('bassheads'));
        return bassheads.find(bassheads => bassheads.id === id)
    }
    static getAirdopes(id){
        let airdopes = JSON.parse(localStorage.getItem('airdopes'));
        return airdopes.find(airdopes => airdopes.id === id)
    }
    static getWatches(id){
        let watches = JSON.parse(localStorage.getItem('watches'));
        return watches.find(watches => watches.id === id)
    }
    static getEarphones(id){
        let earphones = JSON.parse(localStorage.getItem('earphones'));
        return earphones.find(earphones => earphones.id === id)
    }
    static saveCart(cart){
        localStorage.setItem('cart', JSON.stringify(cart));

    }
    static getCart(){
        return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
    }
   

}

document.addEventListener("DOMContentLoaded", ()=>{
    const ui = new UI();
    const products = new Products();

    //setup app
    ui.setupAPP();

    //get saleItems
    products.getsaleItems().then(saleItem => {
        ui.displaysaleItems(saleItem);
        Storage.savesaleItems(saleItem);
    });
    
    //get headphones
    products.getHeadphones().then(bassheads => {
        ui.displaybassheads(bassheads);
        Storage.saveHeadphones(bassheads);
    });

    //get airdopes
    products.getAirdopes().then(airdopes => {
        ui.displayAirdopes(airdopes);
        Storage.saveAirdopes(airdopes)
    });

    //get watches
    products.getWatches().then(watches => {
        ui.displayWatches(watches);
        Storage.saveWatches(watches);
    });

    //get earphones
    products.getEarphones().then(earphones => {
        ui.displayEarphones(earphones);
        Storage.saveEarphones(earphones)
    })
    .then(()=>{
        ui.getBagButtons();
        ui.cartLogic();
    })
});


