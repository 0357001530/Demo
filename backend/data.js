
import mongoose from 'mongoose';
import Food from './models/foodModel.js';


connectDB();

.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => {
  console.log('❌ Connection Error:', err);
  process.exit(1);
});


const foodData = [
  {
    name: "Greek salad",
    image: "food_1.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad"
  },
  {
    name: "Veg salad",
    image: "food_2.png",
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad"
  },
  {
    name: "Clover Salad",
    image: "food_3.png",
    price: 16,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad"
  },
  {
    name: "Chicken Salad",
    image: "food_4.png",
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad"
  },
  {
    name: "Lasagna Rolls",
    image: "food_5.png",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls"
  },
  {
    name: "Peri Peri Rolls",
    image: "food_6.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls"
  },
  {
    name: "Chicken Rolls",
    image: "food_7.png",
    price: 20,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls"
  },
  {
    name: "Veg Rolls",
    image: "food_8.png",
    price: 15,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls"
  },
  {
    name: "Ripple Ice Cream",
    image: "food_9.png",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts"
  },
  {
    name: "Fruit Ice Cream",
    image: "food_10.png",
    price: 22,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts"
  },
  {
    name: "Jar Ice Cream",
    image: "food_11.png",
    price: 10,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts"
  },
  {
    name: "Vanilla Ice Cream",
    image: "food_12.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts"
  },
  {
    name: "Chicken Sandwich",
    image: "food_13.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich"
  },
  {
    name: "Vegan Sandwich",
    image: "food_14.png",
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich"
  },
  {
    name: "Grilled Sandwich",
    image: "food_15.png",
    price: 16,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich"
  },
  {
    name: "Bread Sandwich",
    image: "food_16.png",
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich"
  },
  {
    name: "Cup Cake",
    image: "food_17.png",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cake"
  },
  {
    name: "Vegan Cake",
    image: "food_18.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cake"
  },
  {
    name: "Butterscotch Cake",
    image: "food_19.png",
    price: 20,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cake"
  },
  {
    name: "Sliced Cake",
    image: "food_20.png",
    price: 15,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cake"
  },
  {
    name: "Garlic Mushroom",
    image: "food_21.png",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg"
  },
  {
    name: "Fried Cauliflower",
    image: "food_22.png",
    price: 22,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg"
  },
  {
    name: "Mix Veg Pulao",
    image: "food_23.png",
    price: 10,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg"
  },
  {
    name: "Rice Zucchini",
    image: "food_24.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg"
  },
  {
    name: "Cheese Pasta",
    image: "food_25.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasta"
  },
  {
    name: "Tomato Pasta",
    image: "food_26.png",
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasta"
  },
  {
    name: "Creamy Pasta",
    image: "food_27.png",
    price: 16,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasta"
  },
  {
    name: "Chicken Pasta",
    image: "food_28.png",
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasta"
  },
  {
    name: "Butter Noodles",
    image: "food_29.png",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles"
  },
  {
    name: "Veg Noodles",
    image: "food_30.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles"
  },
  {
    name: "Somen Noodles",
    image: "food_31.png",
    price: 20,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles"
  },
  {
    name: "Cooked Noodles",
    image: "food_32.png",
    price: 15,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles"
  }
];

// Hàm thêm dữ liệu vào database
async function seedDatabase() {
  try {
    // Xóa tất cả dữ liệu cũ
    await Food.deleteMany({});
    console.log('🗑️  Đã xóa dữ liệu cũ');

    // Thêm dữ liệu mới
    const result = await Food.insertMany(foodData);
    console.log(`✅ Đã thêm ${result.length} món ăn vào database`);

    // Hiển thị danh sách món ăn theo category
    console.log('\n📋 Danh sách món ăn đã thêm:\n');
    
    const categories = ['Salad', 'Rolls', 'Deserts', 'Sandwich', 'Cake', 'Pure Veg', 'Pasta', 'Noodles'];
    
    for (const category of categories) {
      const items = result.filter(item => item.category === category);
      console.log(`${category} (${items.length} món):`);
      items.forEach(item => {
        console.log(`  ✓ ${item.name} - $${item.price}`);
      });
      console.log('');
    }

    console.log('🎉 Hoàn thành! Bạn có thể kiểm tra bằng cách:');
    console.log('   GET http://localhost:4000/api/food/list');
    
  } catch (error) {
    console.error('❌ Lỗi khi thêm dữ liệu:', error);
  } finally {
    // Đóng kết nối
    await mongoose.connection.close();
    console.log('\n🔌 Đã đóng kết nối MongoDB');
    process.exit(0);
  }
}

// Chạy hàm seed
seedDatabase();