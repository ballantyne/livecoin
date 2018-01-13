#code taken from https://www.livecoin.net/api/examples#ruby for test purposes.

require "net/http"
require "uri"
require 'openssl'
require "base64"
require "rubygems"
require "json"

file = File.read('proofs/config.json')
json = JSON.parse(file)

json['url'] = URI::parse(json['url'])
 
data = {
'currencyPair'=> 'BTC/USD',
'price'=>'100',
'quantity'=>'0.01'
}
 
sorted_data = json.sort_by { |key, value| key }
sha256 = OpenSSL::Digest::SHA256.new
signature = OpenSSL::HMAC.hexdigest(sha256, json['secret'], URI.encode_www_form(sorted_data)).upcase

puts signature
