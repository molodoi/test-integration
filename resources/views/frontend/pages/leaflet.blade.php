@extends('layouts.frontend')

@section('content')
<div class="my-container">

	<div class="my-inner-container content">
		<div class="my-content">

			<!-- Search -->
			<section class="search">

				<div class="row">
        <div class="col-4">
            <h4>Basic multi-select</h4>
            <select class="custom-select" id="basic" multiple="multiple">
                <option value="cheese">Cheese</option>
                <option value="tomatoes">Tomatoes</option>
                <option value="mozarella">Mozzarella</option>
                <option value="mushrooms">Mushrooms</option>
                <option value="pepperoni">Pepperoni</option>
                <option value="onions">Onions</option>
            </select>
        </div>
        <div class="col-4">
            <h4>Hide checkboxes</h4>
            <select class="custom-select" id="no_checkboxes" multiple="multiple">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div class="col-4">
            <h4>Single select</h4>
            <select class="custom-select" id="single_select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div class="col-4">
            <h4>Filter / search</h4>
            <select class="custom-select" id="filtering" multiple="multiple">
                <option value="cheese">Cheese</option>
                <option value="tomatoes">Tomatoes</option>
                <option value="mozzarella">Mozzarella</option>
                <option value="mushrooms">Mushrooms</option>
                <option value="pepperoni">Pepperoni</option>
                <option value="onions">Onions</option>
                <option value="bacon">Bacon</option>
                <option value="potatoes">Potatoes</option>
            </select>
        </div>
        <div class="col-4">
            <h4>Data source</h4>
            <select class="custom-select" id="data_source" multiple="multiple">
            </select>
        </div>
        <div class="col-4">
            <h4>Data (single select)</h4>
            <select class="custom-select" id="data_source_single">
            </select>
        </div>
    </div>

			</section>
			<!-- Search / End -->


		<section class="my-list-container">
			<!-- Sorting / Layout Switcher -->
			<div class="row my-switcher">

				<div class="col-md-6">
					<!-- Showing Results -->
					<p class="showing-results">14 Results Found </p>
				</div>

			</div>


			<!-- Listings -->
			<div class="row my-listings">
				
				<!-- Listing Item -->
				<div class="col-lg-6 col-md-12">
					<a href="listings-single-page.html" class="listing-item-container" data-marker-id="1">
						<div class="listing-item">
							<img src="images/listing-item-01.jpg" alt="">

							<div class="listing-badge now-open">Now Open</div>
							
							<div class="listing-item-content">
								<span class="tag">Eat & Drink</span>
								<h3>Tom's Restaurant <i class="verified-icon"></i></h3>
								<span>964 School Street, New York</span>
							</div>
							<span class="like-icon"></span>
						</div>
						<div class="star-rating" data-rating="3.5">
							<div class="rating-counter">(12 reviews)</div>
						</div>
					</a>
				</div>
				<!-- Listing Item / End -->

				<!-- Listing Item -->
				<div class="col-lg-6 col-md-12">
					<a href="listings-single-page.html" class="listing-item-container" data-marker-id="2">
						<div class="listing-item">
							<img src="images/listing-item-02.jpg" alt="">
							<div class="listing-item-details">
								<ul>
									<li>Friday, August 10</li>
								</ul>
							</div>
							<div class="listing-item-content">
								<span class="tag">Events</span>
								<h3>Sticky Band</h3>
								<span>Bishop Avenue, New York</span>
							</div>
							<span class="like-icon"></span>
						</div>
						<div class="star-rating" data-rating="5.0">
							<div class="rating-counter">(23 reviews)</div>
						</div>
					</a>
				</div>
				<!-- Listing Item / End -->		

				<!-- Listing Item -->
				<div class="col-lg-6 col-md-12">
					<a href="listings-single-page.html" class="listing-item-container" data-marker-id="3">
						<div class="listing-item">
							<img src="images/listing-item-03.jpg" alt="">
							<div class="listing-item-details">
								<ul>
									<li>Starting from $59 per night</li>
								</ul>
							</div>
							<div class="listing-item-content">
								<span class="tag">Hotels</span>
								<h3>Hotel Govendor</h3>
								<span>778 Country Street, New York</span>
							</div>
							<span class="like-icon"></span>
						</div>
						<div class="star-rating" data-rating="2.0">
							<div class="rating-counter">(17 reviews)</div>
						</div>
					</a>
				</div>
				<!-- Listing Item / End -->

				<!-- Listing Item -->
				<div class="col-lg-6 col-md-12">
					<a href="listings-single-page.html" class="listing-item-container" data-marker-id="4">
						<div class="listing-item">
							<img src="images/listing-item-04.jpg" alt="">

							<div class="listing-badge now-open">Now Open</div>

							<div class="listing-item-content">
								<span class="tag">Eat & Drink</span>
								<h3>Burger House <i class="verified-icon"></i></h3>
								<span>2726 Shinn Street, New York</span>
							</div>
							<span class="like-icon"></span>
						</div>
						<div class="star-rating" data-rating="5.0">
							<div class="rating-counter">(31 reviews)</div>
						</div>
					</a>
				</div>
				<!-- Listing Item / End -->

				<!-- Listing Item -->
				<div class="col-lg-6 col-md-12">
					<a href="listings-single-page.html" class="listing-item-container" data-marker-id="5">
						<div class="listing-item">
							<img src="images/listing-item-05.jpg" alt="">
							<div class="listing-item-content">
								<span class="tag">Other</span>
								<h3>Airport</h3>
								<span>1512 Duncan Avenue, New York</span>
							</div>
							<span class="like-icon"></span>
						</div>
						<div class="star-rating" data-rating="3.5">
							<div class="rating-counter">(46 reviews)</div>
						</div>
					</a>
				</div>
				<!-- Listing Item / End -->

				<!-- Listing Item -->
				<div class="col-lg-6 col-md-12">
					<a href="listings-single-page.html" class="listing-item-container" data-marker-id="6">
						<div class="listing-item">
							<img src="images/listing-item-06.jpg" alt="">

							<div class="listing-badge now-closed">Now Closed</div>

							<div class="listing-item-content">
								<span class="tag">Eat & Drink</span>
								<h3>Think Coffee</h3>
								<span>215 Terry Lane, New York</span>
							</div>
							<span class="like-icon"></span>
						</div>
						<div class="star-rating" data-rating="4.5">
							<div class="rating-counter">(15 reviews)</div>
						</div>
					</a>
				</div>
				<!-- Listing Item / End -->


			</div>
			<!-- Listings Container / End -->


			<!-- Pagination Container -->
			<div class="row my-listings">
				<div class="col-md-12">

					<!-- Pagination -->
					<div class="clearfix"></div>
					<div class="row">
						<div class="col-md-12">
							<!-- Pagination -->
							<div class="pagination-container margin-top-15 margin-bottom-40">
								<nav class="pagination">
									<ul>
										<li><a href="#" class="current-page">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#"><i class="sl sl-icon-arrow-right"></i></a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
					<!-- Pagination / End -->
					
					<!-- Copyrights -->
					<div class="copyrights margin-top-0">© 2018 Babelbed. All Rights Reserved.</div>

				</div>
			</div>
			<!-- Pagination Container / End -->
		</section>

		</div>
	</div>
	<div class="my-inner-container map-fixed">

		<!-- Map -->
		<div id="map-container">
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"></iframe>
		</div>

	</div>
</div>
@endsection

@section('page-script')
<script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js"></script>
<script>
    $(function(){
		$('.listing-block').slimScroll({
			height: '700px'
		});
		$('#basic').multiselect({
    templates: {
        li: '<li><a href="javascript:void(0);"><label class="pl-2"></label></a></li>'
    }
});

$('#no_checkboxes').multiselect({
    templates: {
        li: '<li><a href="javascript:void(0);"><label class="pl-2"></label></a></li>'
    },
    nonSelectedText: 'Choose...',
    selectedClass: 'bg-light',
    onInitialized: function(select, container) {
        // hide checkboxes
        container.find('input').addClass('d-none');
    }
});

$('#single_select').multiselect({
    templates: {
        li: '<li><a href="javascript:void(0);"><label class="pl-2"></label></a></li>'
    },
    buttonClass: 'btn btn-outline-primary',
    selectedClass: 'bg-light',
    onInitialized: function(select, container) {
        // hide radio
        container.find('input[type=radio]').addClass('d-none');
    }
});
	});
</script>
@endsection