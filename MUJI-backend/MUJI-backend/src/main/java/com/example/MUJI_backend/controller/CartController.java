package com.example.MUJI_backend.controller;

import com.example.MUJI_backend.entity.Cart;
import com.example.MUJI_backend.service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true)
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
    private CartService cartService;


    @GetMapping("/{id}")
    public ResponseEntity<Cart> getCartByUserId(@PathVariable("id") String userId){
        return ResponseEntity.status(HttpStatus.OK).body(cartService.getCartByUser(userId));
    }

    @PostMapping("/add")
    public ResponseEntity<Cart> addToCard(@RequestParam String userId, @RequestParam String productId, @RequestParam Integer quantity){
        return ResponseEntity.status(HttpStatus.OK).body(cartService.addToCart(userId, productId, quantity));
    }
}
