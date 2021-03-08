using System;
using Microsoft.AspNetCore.Identity;

namespace Baroque.Models
{
    // FIELDS: User fields
    public class User : IdentityUser<int>
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
