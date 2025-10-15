import type { Product, User } from "@/types";   

export const users: User[] = [
    { id: '1', name: 'Budi Santoso', email: 'budi@example.com', password: '123456', createdAt: '2024-10-01' },
  { id: '2', name: 'Siti Aminah',  email: 'siti@example.com', password: 'abcdef', createdAt: '2024-11-15' },
  { id: '3', name: 'Andi Wijaya',  email: 'andi@example.com', password: '654321', createdAt: '2025-01-10' },
];

export const products: Product[] = [
  { id: '101', title: 'Kopi Arabika 250g', description: 'Biji kopi arabika pilihan', price: 85000,  stock: 23, createdAt: '2025-01-05' },
  { id: '102', title: 'Teh Hijau Premium', description: 'Teh hijau segar',          price: 45000,  stock: 50, createdAt: '2025-01-07' },
  { id: '103', title: 'Madu Hutan 500ml',  description: 'Madu murni',               price: 120000, stock: 12, createdAt: '2025-01-09' },
];
