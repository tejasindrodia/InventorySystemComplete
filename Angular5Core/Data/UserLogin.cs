﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;

namespace Angular5Core.Data
{
    public class UserLogin 
    {
        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string LoginName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string ContactNo { get; set; }
        public string Address { get; set; }
        public Nullable<int> IsApporved { get; set; }
        public Nullable<int> Status { get; set; } 
    }
}
