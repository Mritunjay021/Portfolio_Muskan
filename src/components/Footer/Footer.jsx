import './Footer.css'

export default function Footer(){
    return(
        <div className="footer_container">
            <div className="footer_text_left">
                <p>Copyright &copy;2024 React Project by <span className='footer-name'>Muskan Ahuja</span>. </p>
            </div>
            <div className="footer_text_right">
            <p>This is my personal online portfolio. Not to be copied by anyone.</p>
            </div>
        </div>
    );
}