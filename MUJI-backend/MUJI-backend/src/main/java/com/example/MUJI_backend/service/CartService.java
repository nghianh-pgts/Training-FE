package com.example.MUJI_backend.service;

import com.example.MUJI_backend.entity.Cart;
import com.example.MUJI_backend.entity.CartItem;
import com.example.MUJI_backend.entity.Product;
import com.example.MUJI_backend.entity.User;
import com.example.MUJI_backend.repository.CartItemRepository;
import com.example.MUJI_backend.repository.CartRepository;
import com.example.MUJI_backend.repository.ProductRepository;
import com.example.MUJI_backend.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true)
public class CartService {
    private CartRepository cartRepository;
    private ProductRepository productRepository;
    private CartItemRepository cartItemRepository;
    private UserRepository userRepository;

    public Cart getCartByUser(String userId){
        User user = userRepository.findById(userId).orElseThrow(()->new RuntimeException("Không tìm thấy user với id: "+userId));

        return cartRepository.findByUser(user).orElseGet(()->{
            Cart newCart = new Cart();
            newCart.setUser(user);
            return cartRepository.save(newCart);
        });
    }

    @Transactional
    public Cart addToCart(String userId, String productId, int quantity){
        Cart cart = getCartByUser(userId);
        Product product = productRepository.findById(productId).orElseThrow(()->new RuntimeException("Không tìm thấy product với id: "+productId));

        Optional<CartItem> existingItem = cart.getCartItems().stream().filter(item->item.getProduct().getProductId().equals(productId)).findFirst();

        if(existingItem.isPresent()){ //Nếu đã tồn tại sản phẩm trong giỏ thì thêm số lượng
            existingItem.get().setQuantity(existingItem.get().getQuantity()+quantity);
        }else{ //chưa thì tạo mới
            CartItem cartItem = new CartItem();
            cartItem.setCart(cart); //thêm item vào cart của user với id là userId
            cartItem.setQuantity(quantity); //giá trị ban đầu
            cartItem.setProduct(product);
            cart.getCartItems().add(cartItem);

        }

        return cartRepository.save(cart);
    }



}
