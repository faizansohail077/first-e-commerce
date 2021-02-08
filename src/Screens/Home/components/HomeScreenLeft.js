import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
const HomeScreenLeft = () => {
    return (
        <div>
            <section className="mb-4">
                <div className="md-form md-outline mt-0 d-flex justify-content-between align-items-center">
                    <input type="text" id="search12" className="form-control mb-0" placeholder="Search..." />
                    <a href="#!" className="btn btn-flat btn-md px-3 waves-effect"><AiOutlineSearch /></a>
                </div>
            </section>

            <section className="mb-4">
                <h6 className="font-weight-bold mb-3">Condition</h6>
                <div className="form-check pl-0 mb-3">
                    <input type="checkbox" className="form-check-input filled-in" id="new" />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="new">New</label>
                </div>
                <div className="form-check pl-0 mb-3">
                    <input type="checkbox" className="form-check-input filled-in" id="used" />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="used">Used</label>
                </div>
                <div className="form-check pl-0 mb-3">
                    <input type="checkbox" className="form-check-input filled-in" id="collectible" />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="collectible">Collectible</label>
                </div>
                <div className="form-check pl-0 mb-3 pb-1">
                    <input type="checkbox" className="form-check-input filled-in" id="renewed" />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="renewed">Renewed</label>
                </div>
            </section>

            <section className="mb-4">
                <h6 className="font-weight-bold mb-3">Price</h6>
                <div className="form-check pl-0 mb-3">
                    <input type="radio" className="form-check-input" id="under25" name="materialExampleRadios" />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="under25">Under $25</label>
                </div>
                <div className="form-check pl-0 mb-3">
                    <input type="radio" className="form-check-input" id="2550" name="materialExampleRadios" />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="2550">$25 to $50</label>
                </div>
                <div className="form-check pl-0 mb-3">
                    <input type="radio" className="form-check-input" id="50100" name="materialExampleRadios" />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="50100">$50 to $100</label>
                </div>
                <div className="form-check pl-0 mb-3">
                    <input type="radio" className="form-check-input" id="100200" name="materialExampleRadios" />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="100200">$100 to $200</label>
                </div>
                <div className="form-check pl-0 mb-3">
                    <input type="radio" className="form-check-input" id="200above" name="materialExampleRadios" />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="200above">$200 & Above</label>
                </div>
            </section>

            <section className="mb-4">
                <h6 className="font-weight-bold mb-3">Price</h6>
                <form>
                    <div className="d-flex align-items-center mt-4 pb-1">
                        <div className="md-form md-outline my-0">
                            <input id="from" type="text" className="form-control mb-0" />
                            <label htmlFor="form">$ Min</label>
                        </div>
                        <p className="px-2 mb-0 text-muted"> - </p>
                        <div className="md-form md-outline my-0">
                            <input id="to" type="text" className="form-control mb-0" />
                            <label htmlFor="to">$ Max</label>
                        </div>
                    </div>
                </form>
            </section>

            {/* <section className="mb-4">
                <h6 className="font-weight-bold mb-3">Price</h6>
                <div className="slider-price d-flex align-items-center my-4">
                    <span className="font-weight-normal small text-muted mr-2">$10</span>
                    <form className="multi-range-field w-100 mb-1">
                        <input id="multi1" className="multi-range" type="range" />
                    </form>
                    <span className="font-weight-normal small text-muted ml-2">$30</span>
                </div>
            </section> */}

        </div>
    )
}

export default HomeScreenLeft
