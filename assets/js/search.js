// search function based on GhostHunter (https://github.com/jamalneufeld/ghostHunter)

var timeStamp = '';

var searchField = $("#search-field").ghostHunter(
    {
      results     	  : "#results",	
      before         	: searchCallbackBefore,	
      onComplete      : searchCallbackComplete,
      info_template   : searchGetTemplateInfo(), 
      result_template : searchGetTemplateResult(),								    
    }
 );

					  
function clearResults() 
{
	searchField.clear();
}


function searchCallbackBefore()
{	
	//alert("Results will be rendered!");   
}


function searchCallbackComplete(results)
{	
  var elementHide          	= document.getElementById('results_hide');
  var elementResults        = document.getElementById('results');
  var aElementTime          = document.getElementsByClassName('my_loop_article_time');
  var aElementContent       = document.getElementsByClassName('my_loop_article_content');
  var aElementSearchField   = document.getElementById('search-field');
  
  elementHide.innerHTML = "class: " + elementHide.className;     
  elementHide.className = elementHide.className + " my_do_not_display";  
    
  elementResults.className = elementResults.className + " my_results_show_border";
  
  for(i=0; i<aElementContent.length; i++)
  { 
    aElementContent[i].innerHTML = $(aElementContent[i].innerHTML).text();
  }
    
  for(i=0; i<aElementTime.length; i++)
  { 
    if(aElementTime[i].innerHTML.length > 16)
    {
      aElementTime[i].innerHTML = aElementTime[i].innerHTML.substring(5,16);
    }
  } 
     
}


function searchGetTemplateInfo()
{
	var text = "<div class='my_search_info'>Posts found: {{amount}}</div>";
	
	return text;
}


function searchGetTemplateResult()
{					
	var text = 
				"<div class='my_loop_article'>												                   \
				<div class='my_loop_article_time'>{{pubDate}}!!!</div>                   \
				<h1 class='my_loop_article_title'><a href='{{link}}'>{{title}}</a></h1>	 \
				<div class='my_loop_article_content'>{{description}}</div>					     \
				</div>";
		
	return text;
}