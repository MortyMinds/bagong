import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Puzzle.css';
import '../Background.css'

function Puzzle() {
    const [language, setLanguage] = useState('English'); // Default language is English

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const EnglishContent = (
        <div className="content">
            <h1>Welcome To Puzzle</h1>
            <p>The free trial is over. Many people take our services for granted. Thus, charge come to
                play.
            </p>
            <p style={{fontWeight: "bold"}}>
                Please prepare following information.
                <br/>
                Attention: You don't have to send these info.
            </p>
            <p style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                height: "250px",
                overflow: "auto",
            }}>
                <table className="custom-table">
                    <thead>
                    <tr>
                        <th>Need Info</th>
                        <th>Example</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>user_name</td>
                        <td>firstName lastName</td>
                    </tr>
                    <tr>
                        <td>user_account</td>
                        <td>your_login_emailaccount@example.com</td>
                    </tr>
                    <tr>
                        <td>user_pwd</td>
                        <td>your_login_password</td>
                    </tr>
                    <tr>
                        <td>user_address</td>
                        <td>your_address</td>
                    </tr>
                    <tr>
                        <td>user_city</td>
                        <td>your_city</td>
                    </tr>
                    <tr>
                        <td>user_state</td>
                        <td>your_state</td>
                    </tr>
                    <tr>
                        <td>user_zipcode</td>
                        <td>your_zipcode</td>
                    </tr>
                    <tr>
                        <td>user_phone</td>
                        <td>your_phonenumber</td>
                    </tr>
                    <tr>
                        <td>user_gender</td>
                        <td>Male</td>
                    </tr>
                    <tr>
                        <td>user_linkedin</td>
                        <td>your_linkedin_url</td>
                    </tr>
                    <tr>
                        <td>user_visa</td>
                        <td>H1b</td>
                    </tr>
                    <tr>
                        <td>user_resume</td>
                        <td>Ellen_W_Resume.pdf</td>
                    </tr>
                    </tbody>
                </table>
            </p>
            <p style={{color: "red", fontWeight: "bold"}}>
                Please use the same user_account and user_pwd for all available companies on the website and ensure
                that you apply to at least one position at the companies you are interested in.
                <br/>
                For example, if you wish to apply to Walmart (or any other company), please make sure to manually
                submit an application using the provided user_account and user_pwd.
                <br/>
                Your cooperation and prompt action are greatly appreciated. Thank you!
            </p>
        </div>
    );

    const ChineseContent = (
        <div className="content">
            <h1>欢迎来到Q&A！</h1>
            <p>免费试用已经结束。许多人认为我们的服务是理所当然的，所以开始收费。
            </p>
            <p style={{fontWeight: "bold"}}>
                请准备以下信息
                <br/>
                注意：您不必发送这些信息
            </p>
            <p style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                height: "250px",
                overflow: "auto",
            }}>
                <table className="custom-table">
                    <thead>
                    <tr>
                        <th>需要的信息</th>
                        <th>示例</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>user_name</td>
                        <td>firstName lastName</td>
                    </tr>
                    <tr>
                        <td>user_account</td>
                        <td>your_login_emailaccount@example.com</td>
                    </tr>
                    <tr>
                        <td>user_pwd</td>
                        <td>your_login_password</td>
                    </tr>
                    <tr>
                        <td>user_address</td>
                        <td>your_address</td>
                    </tr>
                    <tr>
                        <td>user_city</td>
                        <td>your_city</td>
                    </tr>
                    <tr>
                        <td>user_state</td>
                        <td>your_state</td>
                    </tr>
                    <tr>
                        <td>user_zipcode</td>
                        <td>your_zipcode</td>
                    </tr>
                    <tr>
                        <td>user_phone</td>
                        <td>your_phonenumber</td>
                    </tr>
                    <tr>
                        <td>user_gender</td>
                        <td>male</td>
                    </tr>
                    <tr>
                        <td>user_linkedin</td>
                        <td>your_linkedin_url</td>
                    </tr>
                    <tr>
                        <td>user_visa</td>
                        <td>H1b</td>
                    </tr>
                    <tr>
                        <td>user_resume</td>
                        <td>Ellen_W_Resume.pdf</td>
                    </tr>
                    </tbody>
                </table>
            </p>
            <p style={{color: "red", fontWeight: "bold"}}>
                请使用相同的 user_account 和 user_pwd 申请网站上的所有可用公司，并确保至少申请感兴趣公司的一个职位。
                <br/>
                例如：
                如果您想申请沃尔玛（或其他公司），请确保使用提供的 user_account 和 user_pwd 手动提交一次申请。
                <br/>
                非常感谢您的合作和及时行动！谢谢！
            </p>
        </div>

    );

    return (
        <div>
            <Header/>
            <div className="background">
                <div className="puzzle-container">
                    <div className="content-container">
                        {language === 'English' ? EnglishContent : ChineseContent}
                    </div>
                    <div className="language-selection">
                        <button onClick={() => handleLanguageChange('English')}>English</button>
                        <button onClick={() => handleLanguageChange('Chinese')}>Chinese</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Puzzle;
