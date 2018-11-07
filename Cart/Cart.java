// public class Main {

//     public static void main(String[] args) {
//         System.out.println("Hello World...");
//     }
// }

import java.util.HashMap;

public class Cart {
    
    // membuat objek hashmap
    HashMap<String, Integer> cart = new HashMap<String, Integer>();
    
    // menambahkan produk
    void tambahProduk(String jenisProduk, Integer jumlahProduk){
        
        Integer produk =  0;

        // kondisi mengecek produk sudah ada atau belum
        if (cart.get(jenisProduk)==null) {

            cart.put(jenisProduk,jumlahProduk);

        } else {

            produk = cart.get(jenisProduk)+ jumlahProduk;
            cart.replace(jenisProduk, produk);

        }
        
        
    }
    
    // menghapus produk
    void hapusProduk(String jenisProduk){
       
            cart.remove(jenisProduk);

    }
    
    // menampilkan produk
    void tampilkanCart(){

        for (String namaProduk: cart.keySet()){

            String nama = namaProduk;
            Integer jumlah = cart.get(namaProduk);  
            System.out.println("- " + nama + " (" + jumlah +")");

        }

    }
    
            
    public static void main(String[] args) {

        Cart keranjang = new Cart();

        keranjang.tambahProduk("Topi Putih", 2);
        keranjang.tambahProduk("Kemeja Hitam", 3);
        keranjang.tambahProduk("Sepatu Merah", 1);
        keranjang.tambahProduk("Sepatu Merah", 4);
        keranjang.tambahProduk("Sepatu Merah", 2);

        keranjang.hapusProduk("Kemeja Hitam");
        keranjang.hapusProduk("Baju Hijau");

        keranjang.tampilkanCart();

    }
}