/*   import { transport, makeANiceEmail } from '../libs/mail';

  requestReset: async (_, args, ctx, info) => {
    let userExists = await User.find({
      email: args.email
    });

    if (!userExists) {
      throw new Error('This email is Invalid!');
    }

    const randomBytesPromisyfied = promisify(randomBytes);
    const resetToken = (await randomBytesPromisyfied(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000;
    // update user with resetToken and resetTokenExpiry
    // email the reset token
    const res = await User.findOneAndUpdate(userExists._id, { resetToken, resetTokenExpiry });
    // const mail = await transport.sendMail({
    //   from: 'gos@gbolahan.com',
    //   to: userEmail,
    //   subject: 'You Password Reset Token',
    //   html: makeANiceEmail(`Your Password Reset Token is here \n\n
    //   <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}"> Click Here to Reset</a>`),
    // });
  }

  resetPassword: async (_, args, ctx, info) => {
    if (args.password !== args.confirmPassword) {
      throw new Error("Your paswords don't match");
    }
    // check if the token is valid and not expired
    const user = await User.findOne({
      resetToken: args.resetToken,
      resetTokenExpiry: { $gt: Date.now() - 3600000 }
    });
    if (!user) {
      throw new Error('This token is either invalid or expired!');
    }
    // hash the password
    let salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(args.password, salt)
    // save the password and remove old resetToken and resetTokenExpiry
    const updatedUser = await User.findOneAndUpdate({ email: user.email },
      {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null
      });
    return updatedUser;

  },
  addToCart: async (_, { data }, { user }, info) => {
    // check that user is signed in
    if (!user) {
      throw new Error('You must be logged in!');
    }
    // Query user cart
    const filter = {
      product: data.productId,
      user: user._id
    }
    const existingCart = await Cart.findOne(filter);
    // check if that item is in their cart already and update the quantity
    if (existingCart) {
      const updatedCart = await Cart.findOneAndUpdate(filter,
        { quantity: existingCart.quantity + 1 });
      return updatedCart;
    }
    // if its not, create a new cart item for that user!
    const newCart = await Cart.create({
      ...data,
      product: data.productId,
      user: user._id
    });
    // return the cartItem
    return newCart;
  },
  removeFromCart: async (_, args, { user }, info) => {
    // check that user is signed in
    if (!user) {
      throw new Error('You must be logged in!');
    }
    // check for the item in the cart belonging to the user
    const filter = {
      product: args.cartId
    }
    const cartItem = await Cart.findOne(filter);
    // throw an error if none
    if (!cartItem) {
      throw new Error('No Cart item found.');
    }
    // verify that cart belongs to the user
    if (cartItem.user !== user._id) {
      throw new Error('This cart does not belong to you');
    }
    // Delete the cart item
    const deletedCartItem = await Cart.findOneAndRemove(filter);
    return deletedCartItem;
  },
  createOrder: async (_, { data }, { user }, info) => {
    // check that user is signed in
    if (!user) {
      throw new Error('You must be logged in!');
    }
    // recalculate the total for the price
    // create the paystack charge
    // convert the cart items to order items
    // create the order
    // delete the item from the users cart
    // return order to the client
  } */