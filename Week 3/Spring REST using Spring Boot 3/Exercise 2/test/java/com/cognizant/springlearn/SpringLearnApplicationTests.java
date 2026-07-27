@SpringBootTest
@AutoConfigureMockMvc
class SpringLearnApplicationTests{
 @Autowired private CountryController countryController;
 @Autowired private MockMvc mvc;
 @Test void contextLoads(){assertNotNull(countryController);}
 @Test void testGetCountry() throws Exception{
  mvc.perform(get("/country"))
   .andExpect(status().isOk())
   .andExpect(jsonPath("$.code").value("IN"))
   .andExpect(jsonPath("$.name").value("India"));
 }
}
