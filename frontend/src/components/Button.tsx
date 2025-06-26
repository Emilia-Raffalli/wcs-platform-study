type ButtonProps = {
    text: string;  // Le texte affiché sur le bouton
    onClick?: () => void; // Fonction appelée au clic (facultative)
    disabled?: boolean;  // Pour désactiver le bouton
    type?: 'button' | 'submit' | 'reset'; // Type HTML du bouton
  };
  
  const Button = ({
    text,
    onClick,
    disabled = true,
    type = 'button',
  }: ButtonProps) => {
    return (
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={` ${disabled ? 'button-disabled' : 'button-style'}`}
        >
        {text}
      </button>
    );
  };
  
  export default Button;
  