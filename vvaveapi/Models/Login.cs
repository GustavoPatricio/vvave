using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace vvaveapi.Models
{

    [Table("WEB_USER")]
    public class Login
    {

        [Key]
        public int IDWEB_USER { get; set; }

        public string UUID { get; set; }

        public string Email { get; set; }

        public string Senha { get; set; }


    }
}