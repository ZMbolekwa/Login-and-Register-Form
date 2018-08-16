using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;
using System.Security.Claims;
using System.Web.Http.Cors;

namespace WebApi.Controllers
{

    [EnableCors(origins: "http://localhost:63281", headers: "*", methods: "*")]
    public class AccountController : ApiController
    {
        private DefaultConnection db = new DefaultConnection();

        // GET: api/Account
        public IQueryable<tblUser> GettblUsers()
        {
            return db.tblUsers;
        }

        // GET: api/Account/5
        //[ResponseType(typeof(tblUser))]
        //public IHttpActionResult GettblUser(int id)
        //{
        //    tblUser tblUser = db.tblUsers.Find(id);
        //    if (tblUser == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(tblUser);
        //}

        [HttpGet]
        [Route("api/claims")]
        [Authorize]
        public tblUser GetUserClaims()
        {
            var identityClaims = (ClaimsIdentity)User.Identity;
            IEnumerable<Claim> claims = identityClaims.Claims;
            tblUser model = new tblUser()
            {
                UserId = Convert.ToInt32(identityClaims.FindFirst("UserId").Value),
                UserName = identityClaims.FindFirst("Username").Value,
                FirstName = identityClaims.FindFirst("FirstName").Value,
                LastName = identityClaims.FindFirst("LastName").Value,
                Email = identityClaims.FindFirst("Email").Value,
                Password = identityClaims.FindFirst("Password").Value

            };
            return model;
        }

        // PUT: api/Account/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttblUser(int id, tblUser tblUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblUser.UserId)
            {
                return BadRequest();
            }

            db.Entry(tblUser).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tblUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Account
        [AllowAnonymous]
        [ResponseType(typeof(tblUser))]
        public IHttpActionResult PosttblUser(tblUser tblUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tblUsers.Add(tblUser);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tblUser.UserId }, tblUser);
        }

        // DELETE: api/Account/5
        [ResponseType(typeof(tblUser))]
        public IHttpActionResult DeletetblUser(int id)
        {
            tblUser tblUser = db.tblUsers.Find(id);
            if (tblUser == null)
            {
                return NotFound();
            }

            db.tblUsers.Remove(tblUser);
            db.SaveChanges();

            return Ok(tblUser);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblUserExists(int id)
        {
            return db.tblUsers.Count(e => e.UserId == id) > 0;
        }
    }
}