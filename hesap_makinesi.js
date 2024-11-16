
function hesapMakinesi(sayi1, sayi2, islem) {
  switch (islem) {
    case "+":
      return sayi1 + sayi2;
    case "-":
      return sayi1 - sayi2;
    case "*":
      return sayi1 * sayi2;
    case "/":
      if (sayi2 === 0) {
        return "Bölme işlemi için ikinci sayı sıfır olamaz.";
      }
      return sayi1 / sayi2;
    default:
      return "Geçersiz işlem türü.";
  }
}

// Örnek kullanım
console.log(hesapMakinesi(10, 5, "+")); // Çıktı: 15
console.log(hesapMakinesi(10, 5, "-")); // Çıktı: 5
console.log(hesapMakinesi(10, 5, "*")); // Çıktı: 50
console.log(hesapMakinesi(10, 0, "/")); // Çıktı: Bölme işlemi için ikinci sayı sıfır olamaz.
