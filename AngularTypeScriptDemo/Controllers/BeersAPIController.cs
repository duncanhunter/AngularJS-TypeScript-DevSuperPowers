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
using AngularTypeScriptDemo.Models;

namespace AngularTypeScriptDemo.Controllers
{
    public class BeersAPIController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/BeersAPI
        public IQueryable<Beer> GetBeers()
        {
            return db.Beers;
        }

        // GET: api/BeersAPI/5
        [ResponseType(typeof(Beer))]
        public IHttpActionResult GetBeer(int id)
        {
            Beer beer = db.Beers.Find(id);
            if (beer == null)
            {
                return NotFound();
            }

            return Ok(beer);
        }

        // PUT: api/BeersAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBeer(int id, Beer beer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != beer.Id)
            {
                return BadRequest();
            }

            db.Entry(beer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BeerExists(id))
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

        // POST: api/BeersAPI
        [ResponseType(typeof(Beer))]
        public IHttpActionResult PostBeer(Beer beer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Beers.Add(beer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = beer.Id }, beer);
        }

        // DELETE: api/BeersAPI/5
        [ResponseType(typeof(Beer))]
        public IHttpActionResult DeleteBeer(int id)
        {
            Beer beer = db.Beers.Find(id);
            if (beer == null)
            {
                return NotFound();
            }

            db.Beers.Remove(beer);
            db.SaveChanges();

            return Ok(beer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BeerExists(int id)
        {
            return db.Beers.Count(e => e.Id == id) > 0;
        }
    }
}