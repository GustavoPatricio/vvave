using System.ComponentModel.DataAnnotations;

namespace vvaveapi.Models
{
    public class WEB_USER
    {
        [Key]
        public int IdWeb_user { get; set; }

        [Required]
        public string UUID { get; set; }
        [Required]
        public string NOME_COMPLETO { get; set; }
        [Required]
        public string USERNAME { get; set; }
        [Required]
        public string EMAIL { get; set; }
        [Required]
        public string TELEFONE { get; set; }
        [Required]
        public string SENHA { get; set; }
    }
}