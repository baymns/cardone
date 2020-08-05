import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Cardone</h6>
            {/* <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p> */}
          </div>

          {/* <div class="col-xs-6 col-md-3">
            <h6>Категории</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Автосервис</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Автозапчасти</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Шиномонтаж</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Автозаправка</a></li>
              <li><a href="http://scanfcode.com/category/android/">Автомойка</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Эвакуатор</a></li>
            </ul>
          </div> */}

          <div className="col-xs-6 col-md-3">
            <h6>Полезные ссылки</h6>
            <ul className="footer-links">

              <li><Link to="http://scanfcode.com/about/">О приложении</Link></li>
              <li><Link to="http://scanfcode.com/contact/">Контакты</Link></li>
              {/* <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li> */}
              <li><Link to="http://scanfcode.com/privacy-policy/">Политика конфиденциальности</Link></li>
              {/* <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li> */}
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
         <Link to="#"> Cardone</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook" to="#"><i className="fab fa-facebook"></i></Link></li>
              <li><Link className="twitter" to="#"><i className="fab fa-twitter"></i></Link></li>
              {/* <li><Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link></li> */}
              <li><Link className="linkedin" to="#"><i className="fab fa-linkedin-in"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
