let cart = {}
let newCart = {}
let item = []
let cartItem = []

function cartSwitch(item = {id:1}, cart=[], action)
{
switch (action){
    case action === "cartAdd":
        newCart = [...cart, item];
        return newCart
                
    case action === "cartDeleteOne":
        newCart = cart.slice()
        for (cartItem of newCart){
            if (cartItem.id == item.id){
                newCart.splice(newCart.indexOf(cartItem),1) //in place edits the cart/array
                break;
        }
    }
    console.log(newCart)
    
    case action === "cartDeleteAll":
        newCart = cart.slice()
        for (cartItem of newCart){
            if (cartItem.id == item.id){
                newCart.splice(newCart.indexOf(cartItem),1) //in place edits the cart/array
        }
    }
    console.log(newCart)
           
case action === "cartEmpty":     
      newCart = []
      cart = []
    
    console.log(cart);
    console.log(newCart);
    
    break;
    
default:
    console.log(cart)
}
}