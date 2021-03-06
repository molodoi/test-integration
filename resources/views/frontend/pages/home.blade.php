@extends('layouts.frontend')

@section('content')
<div class="container-fluid">

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://picsum.photos/1600/300?image=102" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://picsum.photos/1600/300/?image=112" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://picsum.photos/1600/300/?image=113" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        

        <div class="row">
          <div class="col-lg-6 col-md-6">


            <h1>h1. Bootstrap heading</h1>
            <h2>h2. Bootstrap heading</h2>
            <h3>h3. Bootstrap heading</h3>
            <h4>h4. Bootstrap heading</h4>
            <h5>h5. Bootstrap heading</h5>
            <h6>h6. Bootstrap heading</h6>

            <!--Forms-->
      
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">Custom check</label>
                </div>
                <div class="custom-control custom-radio">
                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                    <label class="custom-control-label" for="customRadio1">Custom radio</label>
                </div>
                <select class="custom-select">
                    <option selected>Custom select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
              
              <div class="form-group">
                <label class="custom-file">
                  <input type="file" id="file" class="custom-file-input">
                  <span class="custom-file-control"></span>
                </label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div class="mt-3">
              <div class="btn-group">
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div><!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div><!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div><!-- /btn-group -->
            </div>
            <div class="mt-2">
              <div class="btn-group">
                <button type="button" class="btn btn-info">Info</button>
                <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div><!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div><!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-danger">Danger</button>
                <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div><!-- /btn-group -->
      
            </div>
      
      
            
      
            <!--Pagination-->
            <div class="mt-2">
              <nav aria-label="...">
                <ul class="pagination">
                  <li class="page-item disabled">
                    <span class="page-link">Previous</span>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#!">1</a>
                  </li>
                  <li class="page-item active">
                    <span class="page-link">
                      2
                      <span class="sr-only">(current)</span>
                    </span>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#!">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#!">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
            <!--Checkbox buttons-->
      
            <div class="mt-3">
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-primary active">
                  <input type="checkbox" checked autocomplete="off"> Yes
                </label>
                <label class="btn btn-primary">
                  <input type="checkbox" autocomplete="off"> No
                </label>
              </div>
      
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary active">
                  <input type="checkbox" checked autocomplete="off"> Yes
                </label>
                <label class="btn btn-secondary">
                  <input type="checkbox" autocomplete="off"> No
                </label>
              </div>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-success active">
                  <input type="checkbox" checked autocomplete="off"> Yes
                </label>
                <label class="btn btn-success">
                  <input type="checkbox" autocomplete="off"> No
                </label>
              </div>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-danger active">
                  <input type="checkbox" checked autocomplete="off"> Yes
                </label>
                <label class="btn btn-danger">
                  <input type="checkbox" autocomplete="off"> No
                </label>
              </div>
      
            </div>
      
            <div class="mt-2">
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-warning active">
                  <input type="checkbox" checked autocomplete="off"> Yes
                </label>
                <label class="btn btn-warning">
                  <input type="checkbox" autocomplete="off"> No
                </label>
              </div>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-info active">
                  <input type="checkbox" checked autocomplete="off"> Yes
                </label>
                <label class="btn btn-info">
                  <input type="checkbox" autocomplete="off"> No
                </label>
              </div>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light active">
                  <input type="checkbox" checked autocomplete="off"> Yes
                </label>
                <label class="btn btn-light">
                  <input type="checkbox" autocomplete="off"> No
                </label>
              </div>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-dark active">
                  <input type="checkbox" checked autocomplete="off"> Yes
                </label>
                <label class="btn btn-dark">
                  <input type="checkbox" autocomplete="off"> No
                </label>
              </div>
            </div>


            <h2>Buttons</h2>
            <a href="#!" class="btn btn-custom">A cool button</a>
            <a href="#!" class="btn btn-custom-outline">A cool button</a>

              <p>Hello. <a href="#!">Im a little link</a> in a little bit of body text. Plain and simple.</p>
      
            <h2>Badges</h2>
            <span class="badge badge-primary">Primary</span>
            <span class="badge badge-secondary">Secondary</span>
            <span class="badge badge-success">Success</span>
            <span class="badge badge-danger">Danger</span>
            <span class="badge badge-warning">Warning</span>
            <span class="badge badge-info">Info</span>
            <span class="badge badge-light">Light</span>
            <span class="badge badge-dark">Dark</span>
      
            <!--Breadcrumb-->
            <nav aria-label="breadcrumb" role="navigation">
              <ol class="breadcrumb mt-2">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
      
            <!--Buttons-->
            <div>
              <button type="button" class="btn btn-primary">Primary</button>
              <button type="button" class="btn btn-secondary">Secondary</button>
              <button type="button" class="btn btn-success">Success</button>
              <button type="button" class="btn btn-danger">Danger</button>
            </div>
            <div class="mt-2">
              <button type="button" class="btn btn-warning">Warning</button>
              <button type="button" class="btn btn-info">Info</button>
              <button type="button" class="btn btn-light">Light</button>
              <button type="button" class="btn btn-dark">Dark</button>
            </div>
      
            <!--Outline Buttons-->
            <div class="mt-2">
              <button type="button" class="btn btn-outline-primary">Primary</button>
              <button type="button" class="btn btn-outline-secondary">Secondary</button>
              <button type="button" class="btn btn-outline-success">Success</button>
              <button type="button" class="btn btn-outline-danger">Danger</button>
            </div>
            <div class="mt-2">
              <button type="button" class="btn btn-outline-warning">Warning</button>
              <button type="button" class="btn btn-outline-info">Info</button>
              <button type="button" class="btn btn-outline-light">Light</button>
              <button type="button" class="btn btn-outline-dark">Dark</button>
            </div>
      
            
      
            
      
            <div class="mt-2">
      
              <div class="progress">
                <div class="progress-bar bg-primary" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-secondary" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-success" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-info" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-warning" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-danger" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-light" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-dark" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
      
              <div class="progress mt-2">
                <div class="progress-bar progress-bar-striped bg-primary" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar progress-bar-striped bg-secondary" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar progress-bar-striped bg-info" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar progress-bar-striped bg-danger" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar progress-bar-striped bg-light" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar progress-bar-striped bg-dark" role="progressbar"
                     style="width: 16%" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
      
            </div>
      
      
          </div>
      
          <div class="col-lg-6 col-md-6">
      
            <!--Alerts-->
            <div class="mb-2 alert alert-primary" role="alert">
              This is a primary alert with <a href="#" class="alert-link">an example link</a>.
            </div>
            <div class="mb-2 alert alert-secondary" role="alert">
              This is a secondary alert with <a href="#" class="alert-link">an example link</a>.
            </div>
            <div class="mb-2 alert alert-success" role="alert">
              This is a success alert with <a href="#" class="alert-link">an example link</a>.
            </div>
            <div class="mb-2 alert alert-danger" role="alert">
              This is a danger alert with <a href="#" class="alert-link">an example link</a>.
            </div>
            <div class="mb-2 alert alert-warning" role="alert">
              This is a warning alert with <a href="#" class="alert-link">an example link</a>.
            </div>
            <div class="mb-2 alert alert-info" role="alert">
              This is a info alert with <a href="#" class="alert-link">an example link</a>.
            </div>
            <div class="mb-2 alert alert-light" role="alert">
              This is a light alert with <a href="#" class="alert-link">an example link</a>.
            </div>
            <div class="mb-2 alert alert-dark" role="alert">
              This is a dark alert with <a href="#" class="alert-link">an example link</a>.
            </div>
      
      
            <div class="mt-2">
              <ul class="list-group">
                <li class="list-group-item list-group-item-primary">Dapibus ac facilisis in</li>
                <li class="list-group-item list-group-item-secondary">Cras justo odio</li>
                <li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
                <li class="list-group-item list-group-item-danger">Porta ac consectetur ac</li>
                <li class="list-group-item list-group-item-warning">Vestibulum at eros</li>
                <li class="list-group-item list-group-item-info">Cras justo odio</li>
                <li class="list-group-item list-group-item-light">Dapibus ac facilisis in</li>
                <li class="list-group-item list-group-item-dark">Porta ac consectetur ac</li>
              </ul>
      
      
            </div>
            <div class="card text-white bg-primary mb-2 d-inline-block" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h4 class="card-title">Primary card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </div>
            </div>
            <div class="card text-white bg-secondary mb-2 d-inline-block" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h4 class="card-title">Secondary card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </div>
            </div>
            <div class="card text-white bg-success mb-2 d-inline-block" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h4 class="card-title">Success card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </div>
            </div>
            <div class="card text-white bg-danger mb-2 d-inline-block" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h4 class="card-title">Danger card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </div>
            </div>
            <div class="card text-white bg-warning mb-2 d-inline-block" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h4 class="card-title">Warning card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </div>
            </div>
            <div class="card text-white bg-info mb-2 d-inline-block" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h4 class="card-title">Info card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </div>
            </div>
            <div class="card bg-light mb-2 d-inline-block" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h4 class="card-title">Light card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </div>
            </div>
            <div class="card text-white bg-dark mb-2 d-inline-block" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h4 class="card-title">Dark card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </div>
            </div>
      
      
            <div>
      
              <table class="table table-hover table-striped table-">
                <thead class="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Column</th>
                  <th>Column</th>
                  <th>Column</th>
                  <th>Column</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td class="table-primary">Content</td>
                  <td class="table-secondary">Content</td>
                  <td class="table-success">Content</td>
                  <td class="table-danger">Content</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td class="table-warning">Content</td>
                  <td class="table-info">Content</td>
                  <td class="table-light">Content</td>
                  <td class="table-dark">Content</td>
                </tr>
      
                <tr>
                  <th scope="row">1</th>
                  <td class="bg-primary">Content</td>
                  <td class="bg-secondary">Content</td>
                  <td class="bg-success">Content</td>
                  <td class="bg-danger">Content</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td class="bg-warning">Content</td>
                  <td class="bg-info">Content</td>
                  <td class="bg-light">Content</td>
                  <td class="bg-dark">Content</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
@endsection
