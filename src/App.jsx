import React, { Component } from 'react';

// import Popup from './components/Popup';
// import Button from './components/Button';
import { Modal, Select } from 'antd';

import 'antd/dist/antd.css';
import './components/Button/Button.scss';
import './components/Popup/Popup.scss';
import './components/CurrencySelector/CurrencySelector.scss';

class App extends Component {
    state = {
        isVisible: false,
        selectedMethod: `card`,
        selectedAmount: 200,
    };

    renderVariants = () => {

    }

    handleShowModal = () => {
        this.setState( state => {
            return {
                isVisible: true,
            }
        });

        console.log(`click`);
    }
    
    handleCancel = e => {
        console.log(e);

        this.setState({
            isVisible: false,
        });
    };

    handleChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({
            selectedMethod: value
        });
    }

    handleSelectAmount = e => {
        const buttonList = e.target.classList.contains(`box-list`) ? e.target : e.target.closest(`.box-list`);
        const buttonListItems = buttonList.querySelectorAll(`.box-item`);
        const selectedButton = e.target.classList.contains(`box-item`) ? e.target : e.target.closest(`.box-item`);

        [...buttonListItems].map(item => {
            item.classList.remove(`box-item--active`);

            if (selectedButton === item) {
                selectedButton.classList.add(`box-item--active`);
            }
        });

        this.setState({
            selectedAmount: selectedButton.dataset.amount
        });

        document.getElementById(`credit-amount__value`).innerHTML = selectedButton.dataset.amount;
    }
    
    handleSubmitModal = () => {
        alert(`Выбран способ оплаты: ${this.state.selectedMethod} , сумма к зачислению: ${this.state.selectedAmount}`);
    }

    render() {
        const { Option } = Select;

        return (
            <>
                <button className="button" onClick={this.handleShowModal} type="button">
                    Открыть модалку
                </button>
                <Modal
                    title=""
                    visible={this.state.isVisible}
                    onCancel={this.handleCancel}
                    width="695px"
                    footer={null}
                    bodyStyle={{ background: 'none' }}
                    className="modal"
                >
                    <span className="modal-label">+100%</span>

                    <p className="modal-timer"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.2 0.600006C7.7584 0.600006 7.4 0.958406 7.4 1.40001V2.35313C3.31124 3.10913 0.200001 6.69647 0.200001 11C0.200001 15.8506 4.14937 19.8 9 19.8C13.8506 19.8 17.8 15.8506 17.8 11C17.8 6.69647 14.6888 3.10913 10.6 2.35313V1.40001C10.6 0.958406 10.2416 0.600006 9.8 0.600006H8.2ZM15.3922 2.19219C15.233 2.19224 15.0775 2.23974 14.9455 2.32863C14.8135 2.41752 14.711 2.54376 14.6511 2.69121C14.5912 2.83866 14.5767 3.00062 14.6093 3.15638C14.642 3.31214 14.7203 3.45463 14.8344 3.56563L15.6344 4.36563C15.7081 4.44241 15.7964 4.50371 15.8941 4.54594C15.9918 4.58816 16.0969 4.61047 16.2034 4.61156C16.3098 4.61264 16.4154 4.59247 16.5139 4.55224C16.6125 4.51201 16.702 4.45252 16.7773 4.37726C16.8525 4.302 16.912 4.21247 16.9522 4.11393C16.9925 4.01539 17.0126 3.90981 17.0115 3.80338C17.0105 3.69694 16.9882 3.5918 16.9459 3.4941C16.9037 3.39639 16.8424 3.3081 16.7656 3.23438L15.9656 2.43438C15.8911 2.35775 15.8019 2.29683 15.7034 2.25523C15.6049 2.21363 15.4991 2.1922 15.3922 2.19219ZM9 3.80001C12.9859 3.80001 16.2 7.01408 16.2 11C16.2 14.9859 12.9859 18.2 9 18.2C5.01407 18.2 1.8 14.9859 1.8 11C1.8 7.01408 5.01407 3.80001 9 3.80001ZM8.9875 5.38907C8.7756 5.39238 8.57367 5.47963 8.42603 5.63166C8.27839 5.7837 8.1971 5.9881 8.2 6.20001V9.61719C7.95718 9.75738 7.75547 9.95892 7.61507 10.2016C7.47466 10.4443 7.4005 10.7196 7.4 11C7.40022 11.2806 7.47426 11.5563 7.61468 11.7993C7.75509 12.0423 7.95696 12.2441 8.2 12.3844V13.4C8.1985 13.506 8.21809 13.6113 8.25762 13.7096C8.29715 13.808 8.35584 13.8976 8.43027 13.973C8.50471 14.0485 8.59341 14.1085 8.69121 14.1494C8.78902 14.1903 8.89398 14.2114 9 14.2114C9.10602 14.2114 9.21098 14.1903 9.30879 14.1494C9.4066 14.1085 9.49529 14.0485 9.56973 13.973C9.64416 13.8976 9.70285 13.808 9.74238 13.7096C9.78191 13.6113 9.8015 13.506 9.8 13.4V12.3828C10.0428 12.2426 10.2445 12.0411 10.3849 11.7984C10.5253 11.5557 10.5995 11.2804 10.6 11C10.5998 10.7194 10.5257 10.4437 10.3853 10.2007C10.2449 9.95773 10.043 9.75595 9.8 9.61563V6.20001C9.80147 6.09297 9.78144 5.98674 9.74111 5.88758C9.70077 5.78843 9.64095 5.69838 9.56519 5.62276C9.48943 5.54715 9.39926 5.4875 9.30003 5.44736C9.2008 5.40722 9.09453 5.3874 8.9875 5.38907Z" fill="#83F6B1"/>
</svg><span>00:15:54</span></p>

                    <p className="modal-title">Увеличьте свой депозит!</p>

                    <Select 
                        defaultValue="card"
                        className="method-selector"
                        onChange={this.handleChange}
                    >
                        <Option value="card">Банковская карта</Option>
                        <Option value="bitcoin">Биткоин</Option>
                        <Option value="invoice">Выставить счет</Option>
                    </Select>

                    
                    <div className="box-list" onClick={this.handleSelectAmount}>
                        <div className="box-item" data-amount="100">
                            <span>Пополнить на</span>
                            <span className="credit__value">$ 50</span>
                            <span className="credit__amount-text">Получить</span>
                            <span className="credit__amount-value">$ 100</span>
                        </div>
                        <div className="box-item box-item--active" data-amount="200">
                            <span>Пополнить на</span>
                            <span className="credit__value">$ 100</span>
                            <span className="credit__amount-text">Получить</span>
                            <span className="credit__amount-value">$ 200</span>
                        </div>
                        <div className="box-item" data-amount="1000">
                            <span>Пополнить на</span>
                            <span className="credit__value">$ 500</span>
                            <span className="credit__amount-text">Получить</span>
                            <span className="credit__amount-value">$ 1000</span>
                        </div>
                    </div>

                    <p className="credit-amount">$<span id="credit-amount__value">200</span> будет зачисленно вам на счёт</p>

                    <button className="button" type="button" onClick={this.handleSubmitModal}>
                       Пополнить
                    </button>

                    <p className="bottom-text">При пополнениии счета с банковской карты списание средств происходит по курсу банка клиента</p>
                    <a className="bottom__link" href="#">Подробнее</a>
                </Modal>
            </>
        );
    }
}

export default App;