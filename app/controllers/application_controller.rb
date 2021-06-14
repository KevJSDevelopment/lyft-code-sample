class ApplicationController < ActionController::API

    def test
        string_to_cut = params[:string_to_cut]
        
        string_array = string_to_cut.gsub(/\s/, "").split("")
        cut_array = string_array.reject.with_index { |char, idx| (idx + 1) % 3 != 0 }
        
        return_string = cut_array.join("")

        render json: { return_string: return_string }
    end

end
