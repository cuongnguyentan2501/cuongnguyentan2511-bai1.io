import React, { Component } from 'react';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import ProductContent from './ProductContent';

// State -> Dữ liệu của Component do nó nắm giữ
// Props -> Dữ liệu được truyền vào từ Component lồng bên ngoài (Component cha)

export default class MainContentClass extends Component {
  constructor(props) {
    super(props);

    let idVariantDefault = Math.ceil(Math.random() * 99999);

    this.state = {
      selectedVariantId: idVariantDefault,
      title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm Edit',
      brand: undefined,
      variations: [
        {
          id: idVariantDefault,
          price: 20000,
          name: 'Màu đen',
          quantity: 10,
          percent: 0.1,
          imageURL: '/images/black.jpg'
        },
        {
          id: Math.ceil(Math.random() * 99999),
          price: 22000,
          name: 'Màu đỏ',
          quantity: 5,
          percent: 0.15,
          imageURL: '/images/red.jpg'
        },
        {
          id: Math.ceil(Math.random() * 99999),
          price: 25000,
          name: 'Màu xanh',
          quantity: 2,
          percent: 0,
          imageURL: '/images/blue.jpg'
        }
      ],
      attrProducts: [
        {
          name: 'Chất liệu',
          value: 'polyester và thun'
        },
        {
          name: '',
          value: 'Thoát mồ hôi tốt'
        },
        {
          name: '',
          value: 'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát'
        },
        {
          name: '',
          value: 'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc'
        },
        {
          name: 'Chất liệu',
          value: 'polyester và thun'
        },
      ],
      description: 'Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát và thoát mồ hôi tốt, kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc'
    }
  }

  render() {
    let { title, brand, variations, selectedVariantId } = this.state;
    let injectedProps = {
      title,
      brand,
      variations,
      selectedVariantId
    }

    return (
      <div className="container">
        <div className="list-blog">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt eveniet maxime magni in, nostrum
            facilis, temporibus, quam facere sint est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti,
          qui.</p>
        </div>
        <div id="app">
          <div className="cart">Giỏ hàng (1)</div>
          <div className="product">
            <ProductImage />
            <ProductContent {...injectedProps} />
          </div >
          <ProductDescription />
        </div>
      </div>
    )
  }
}