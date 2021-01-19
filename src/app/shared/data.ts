import { Category } from '../product/Models/category.enum';
import { ProductModel } from '../product/Models/product.model';
export const products: ProductModel[] = [
  {
    id: 1,
    name: 'AMD Ryzen Threadripper 3000',
    description: 'Ryzen (/ˈraɪzən/ RY-zən)[6] is a brand[7] of x86-64 microprocessors designed and marketed by Advanced Micro Devices, Inc. (AMD) for desktop, mobile, server, and embedded platforms based on the Zen microarchitecture.',
    category: Category.CPU,
    price: 3000,
    isAvailable: true
  },
  {
    id: 2,
    name: 'Cerebras',
    description: `Faster time to solution with the CS-1
                  Designed for deep learning, the CS-1 delivers more performance than a cluster of traditional machines, in a single system. This means faster time to solution at far greater power and space efficiency.
                  The CS-1 is powered by the revolutionary Wafer-Scale Engine (WSE), fits directly into standard data center infrastructure and is easily programmable with today’s ML frameworks.`,
    price: 500000,
    category: Category.ExternalCPU,
    isAvailable: true
  },
  {
    id: 3,
    name: 'Asus GeForce RTX 3090 TUF OC',
    description: `The GeForce 30 series is a family of graphics processing units developed by Nvidia, succeeding the GeForce 20 series. The series was announced on September 1, 2020, and started shipping on September 17, 2020.`,
    price: 3500,
    category: Category.GPU,
    isAvailable: false
  },
  {
    id: 4,
    name: 'HP DDR4 DIMM 1x32Gb',
    description: `RAM memory`,
    price: 1000,
    category: Category.RAM,
    isAvailable: true
  }];
