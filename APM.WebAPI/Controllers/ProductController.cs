using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using APM.WebAPI.Models;
using APM.WebAPI.Repository;

namespace APM.WebAPI.Controllers
{
    public class ProductController : ApiController
    {
        public IEnumerable<Product> Get()
        {
            var productRepo = new ProductRepository();
            return productRepo.Retrieve();

        }
    }
}
